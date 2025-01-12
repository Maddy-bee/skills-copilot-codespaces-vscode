function skillsMember() {
  const member = new Member('John Doe', '');    // Error: The second argument is missing
  member.addSkill('JavaScript');
  member.addSkill('React');
  console.log(member);
}