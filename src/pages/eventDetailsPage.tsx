import { useEffect, useState } from "react";
import { Card } from "../components/ui/Card";
import Button from "../components/ui/Button";
// import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import { MessageCircle } from "lucide-react";

const EventDetails = () => {
  const [comments, setComments] = useState([
    { id: 1, name: "John Doe", text: "Looking forward to this event!" },
    { id: 2, name: "Jane Smith", text: "Excited to join!" },
  ]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim() === "") return;
    setComments([
      ...comments,
      { id: Date.now(), name: "You", text: newComment },
    ]);
    setNewComment("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Event Details */}
      <Card className="p-6 shadow-xl rounded-2xl bg-white dark:bg-gray-900 dark:text-white text-black">
        <div className=" flex gap-3 flex-col mb-6">
          <h1 className="text-3xl font-bold">React Meetup 2025</h1>

          <p className="text-gray-400">March 10, 2025 | 5:00 PM IST</p>
        </div>
        {/* <img src="" alt="" /> */}
        <div className=" h-60 w-full bg-gray-600 "></div>
        <p className="mt-4">
          Join us for an exciting React Meetup where developers share knowledge
          and network.
        </p>

        <h2 className=" tex font-bold text-lg mt-3 mb-3">Details</h2>
        <p className=" mb-4">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          et id voluptas, velit nam architecto reprehenderit praesentium vel
          dicta impedit saepe, sunt officiis? Voluptates facilis, placeat
          consequatur velit quia itaque blanditiis omnis eos veritatis mollitia
          alias earum aperiam sequi numquam corrupti doloremque fuga possimus
          quasi optio minima doloribus consectetur tempore nesciunt. A alias
          soluta corporis inventore veritatis praesentium nihil minus? Pariatur
          harum explicabo excepturi vero placeat recusandae nemo! Autem, aut.
          Laborum ratione amet impedit sit eligendi debitis non exercitationem
          maxime qui nobis deleniti quo nostrum obcaecati illum laudantium nulla
          quas doloremque, aliquid enim! Possimus ipsum a alias, porro quos
          sint.
        </p>
        <Button className="mt-4 w-full">Attend Online</Button>
      </Card>

      {/* Comment Section */}
      <Card className="p-6 shadow-xl rounded-2xl dark:text-white text-black dark:placeholder:text-white placeholder:text-black ">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <MessageCircle className="w-5 h-5" /> Comments
        </h2>
        <div className="space-y-4 mt-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start gap-3">
              {/* <Avatar className="bg-gray-700">{comment.name[0]}</Avatar> */}
              <div>
                <p className="font-medium">{comment.name}</p>
                <p className="text-gray-500">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <Textarea
            className="flex-1 h-10 bg-white dark:bg-black border-none "
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button onClick={addComment}>Post</Button>
        </div>
      </Card>
    </div>
  );
};

export default EventDetails;
