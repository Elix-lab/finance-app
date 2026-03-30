-- Change transactions.user_id type to uuid
alter table transactions
alter column user_id type uuid
using user_id::uuid;