var data = {
  posts: [
    { username: "Aaron", text: "Hey man!", likes: 3 },
    { username: "Jona", text: "Man, I love coding", likes: 10 },
    { username: "Liron", text: "Yeah, coding is great", likes: 30 },
    { username: "Narkis", text: "Coding is about what's inside", likes: 12 },
    { username: "Alex", text: "Coding is rad", likes: 14 },
    { username: "Avi", text: "I'm in the army.", likes: 56 }
  ]
};

var topPosts = [];
  for (i = 0; i < data.posts.length; i++) {
    if (data.posts[i].likes > 10) {
		topPosts.push(data.posts[i])
	} 
	
}