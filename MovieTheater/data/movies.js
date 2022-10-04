import beetlejuice from '../assets/beetlejuice.jpg';
import addams from '../assets/addams.jpg';
import nightmareb4 from '../assets/nightmareb4.jpg';

export default movies = [

    {
      id: 1,
      title: "Beetlejuice",
      body: "Directed by Tim Burton",
      image: <img src={beetlejuice} />,
      userId: 9,
      tags: [
        "history",
        "american",
        "crime"
      ],
      reactions: 2
    },
    {
      id: 2,
      title: "The Addams Family",
      body: "Directed by Barry Sonnenfeld",
      image: <img src={addams} />,
      userId: 13,
      tags: [
        "french",
        "fiction",
        "english"
      ],
      reactions: 2
    },
    {
      id: 3,
      title: "The Nightmare Before Christmas",
      body: "Directed by Tim Burton ",
      image: <img src={nightmareb4} />,
      userId: 32,
      tags: [
        "magical",
        "history",
        "french"
      ],
      reactions: 5
    }
  ];
