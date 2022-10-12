drop view if exists comment_with_author cascade;

create view comment_with_author as
    select
        p.id,
        p.cn_id,
        p.cnp_id,
        p.name,
        p.image,
        p.slug,
        p."createdAt",
        p."updatedAt",
        p.text,
        p."authorId",
        p."parentId",
        to_jsonb(u) as author
    from
        "comments" p
        inner join profiles u on p."authorId" = u.id;