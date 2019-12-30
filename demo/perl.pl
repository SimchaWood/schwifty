$foobar = m/^(?:(start))(?<!foo)(?<=bar)MUSKET_(?<cfgName>[A-Z0-9_]+)(._fibble\d*){0,1}(?=foo)(?!bar)$/u

my $sender = "Buffy the Vampire Slayer";
my $recipient = "Spike";

print <<"END";

Dear $recipient,

I wish you to leave Sunnydale and never return.

Not Quite Love,
$sender

END
