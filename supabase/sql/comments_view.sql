drop view if exists comments_thread, comments_thread_with_user_vote cascade;

create recursive view comments_thread (
    id,
    cn_id,
    cnp_id,
    name,
    image,
    slug,
    "createdAt",
    "updatedAt",
   text,
    "authorId",
    "parentId",
    "author",
    "votes",
    "upvotes",
    "downvotes",
    "depth",
    "path",
    "pathVotesRecent",
    "pathLeastRecent",
    "pathMostRecent"
) as
    select
           id,
           cn_id,
           cnp_id,
           name,
           image,
    slug,
    "createdAt",
    "updatedAt",
   text,
    "authorId",
    "parentId",
    "author",
    "votes",
    "upvotes",
    "downvotes",
        0 as depth,
        array[cn_id] as "path",
        array[cn_id] as "pathVotesRecent",
        array[cn_id] as "pathLeastRecent",
        array[cn_id] as "pathMostRecent"
    from
        comment_with_author_votes
    where
        cnp_id is null
    union
    select
        p1.id,
        p1.cn_id,
        p1.cnp_id,
        p1.name,
        p1.image,
        p1.slug,
        p1."createdAt",
        p1."updatedAt",
        p1.text,
        p1."authorId",
        p1."parentId",
        p1."author",
        p1."votes",
        p1."upvotes",
        p1."downvotes",
        p2.depth + 1 as depth,
        p2."path" || p1.cn_id::bigint as "path",
        p2."pathVotesRecent" || -p1."votes"::bigint || -extract(epoch from p1."createdAt")::bigint || p1.cn_id as "pathVotesRecent",
        p2."pathLeastRecent" || extract(epoch from p1."createdAt")::bigint || p1.cn_id as "pathLeastRecent",
        p2."pathMostRecent" || -extract(epoch from p1."createdAt")::bigint || p1.cn_id as "pathMostRecent"
    from
        comment_with_author_votes p1
        join comments_thread p2 on p1.cnp_id = p2.cn_id;

create or replace view comments_thread_with_user_vote as
    select distinct on (cn_id)
        id,
        cn_id,
        cnp_id,
        name,
        image,
        slug,
        "createdAt",
        "updatedAt",
       text,
        "authorId",
        "parentId",
        "author",
        "votes",
        "upvotes",
        "downvotes",
        "depth",
        "path",
        "pathVotesRecent",
        "pathLeastRecent",
        "pathMostRecent",
        coalesce(
            (
                select
                    v."value"
                from
                    votes v
                where
                    auth.uid() = v."authorId" and v."combId" = cn_id
            ),
            0
        ) as "userVoteValue"
    from comments_thread;
