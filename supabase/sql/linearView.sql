drop view if exists comments_linear_view cascade;


create view comments_linear_view as
    select
        root_c.*,
        to_jsonb(parent_c) as parent,
        coalesce(json_agg(children_c) filter (where children_c.cn_id is not null), '[]') as replies
    from
        comment_with_author root_c
        inner join comment_with_author parent_c on root_c.cnp_id = parent_c.cn_id
       
        left join comment_with_author children_c on children_c.cnp_id = root_c.cn_id
    group by
        root_c.id,
        root_c.cn_id,
        root_c.cnp_id,
        root_c.name,
        root_c.image,
        root_c.slug,
        root_c."createdAt",
        root_c."updatedAt",
        root_c.text,
        root_c."authorId",
        root_c."parentId",
        root_c.author,
        parent_c.*;