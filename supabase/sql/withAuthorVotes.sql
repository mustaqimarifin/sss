drop view if exists comment_with_author_votes cascade;


create or replace view comment_with_author_votes as
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
        p."author",
        coalesce (
            sum (v.value) over w,
            0
        ) as "votes",
        sum (case when v.value > 0 then 1 else 0 end) over w as "upvotes",
        sum (case when v.value < 0 then 1 else 0 end) over w as "downvotes"
        -- (select case when auth.uid() = v."userId" then v.value else 0 end) as "userVoteValue"
    from
        comment_with_author p
        left join votes v on p.cn_id = v."combId"
    window w as (
        partition by v."combId"
    );