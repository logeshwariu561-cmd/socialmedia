// Step 1: Switch to Social Media Database
//use socialMediaDB;

// Step 2: Insert User Profiles
db.users.insertMany([
  {
    userId: "USR101",
    username: "coder_jane",
    fullName: "Jane Doe",
    bio: "Full Stack Developer & AI enthusiast",
    followersCount: 150,
    followingCount: 80
  }
]);

// Step 3: Insert Posts with embedded comments and interactions
db.posts.insertMany([
  {
    postId: "POST5001",
    authorId: "USR101",
    content: "Excited to launch our new NoSQL application today!",
    createdAt: new Date("2026-09-18T10:00:00Z"),
    likesCount: 12,
    comments: [
      {
        commentId: "CMT1",
        user: "dev_alex",
        text: "Congratulations! Looks awesome.",
        timestamp: new Date("2026-09-18T10:15:00Z")
      }
    ]
  }
]);

// Step 4: Add a new comment to a post
db.posts.updateOne(
  { postId: "POST5001" },
  {
    $push: {
      comments: {
        commentId: "CMT2",
        user: "tech_guru",
        text: "Great job! What database engine are you using?",
        timestamp: new Date()
      }
    }
  }
);

// Step 5: Like a post (Atomically increment like count)
db.posts.updateOne(
  { postId: "POST5001" },
  { $inc: { likesCount: 1 } }
);

// Query: Retrieve post with all comments
db.posts.find({ postId: "POST5001" }).pretty();