-- Create a table for votes
create table votes (
    "authorId" uuid not null references profiles (id),
    "combId" bigint not null references "comments" (cn_id),
    "value" bigint not null,

    primary key ("combId", "authorId"),
    constraint vote_quantity check (value <= 1 and value >= -1)
);

alter table votes enable row level security;

create policy "Votes are viewable by everyone"
    on votes for select
    using ( true );

create policy "Users can vote as themselves"
    on votes for insert
    with check (auth.uid() = "authorId");

create policy "Users can update their own votes"
    on votes for update
    using ( auth.uid() = "authorId" );
