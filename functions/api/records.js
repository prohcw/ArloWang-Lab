function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

export async function onRequestGet(context) {
  try {
    const result = await context.env.DB
      .prepare(`
        SELECT
          id,
          name,
          value,
          note,
          created_at
        FROM records
        ORDER BY id DESC
      `)
      .all();

    return json({
      success: true,
      data: result.results
    });

  } catch (error) {
    console.error(error);

    return json({
      success: false,
      error: "读取数据库失败"
    }, 500);
  }
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    const name = String(body.name ?? "").trim();
    const value = Number(body.value);
    const note = String(body.note ?? "").trim();

    if (!name) {
      return json({
        success: false,
        error: "name 不能为空"
      }, 400);
    }

    if (!Number.isFinite(value)) {
      return json({
        success: false,
        error: "value 必须是有效数字"
      }, 400);
    }

    const result = await context.env.DB
      .prepare(`
        INSERT INTO records (
          name,
          value,
          note
        )
        VALUES (?, ?, ?)
      `)
      .bind(
        name,
        value,
        note
      )
      .run();

    return json({
      success: true,
      id: result.meta.last_row_id
    }, 201);

  } catch (error) {
    console.error(error);

    return json({
      success: false,
      error: "写入数据库失败"
    }, 500);
  }
}
