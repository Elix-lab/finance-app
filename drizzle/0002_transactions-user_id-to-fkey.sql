-- Changing transactions.user_id to foreyng key
alter table transactions
add constraint transactions_user_id_fkey
foreign key (user_id)
references users(id)
on delete cascade
on update cascade;