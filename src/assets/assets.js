import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import spotify_icon from "./spotify_icon.png";
import clock_icon from "./clock_icon.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import img9 from "./img9.jpg";
import img10 from "./img10.jpg";
import img11 from "./img11.jpg";
import img12 from "./img12.jpg";
import img13 from "./img13.jpg";
import img14 from "./img14.jpg";
import img15 from "./img15.jpg";
import img16 from "./img16.jpg";
import song1 from "./song1.mp3";
import song2 from "./song2.mp3";
import song3 from "./song3.mp3";
import singer_01 from "./singer_01.png";
import singer_02 from "./singer_02.png";
import singer_03 from "./singer_03.png";
import singer_04 from "./singer_04.png";
import singer_05 from "./singer_05.jpg";
import singer_06 from "./singer_06.png";
import verified_image from "./verified_image.webp";

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  spotify_icon,
  clock_icon,
  verified_image,
};

export const albumsData = [
  {
    id: 1,
    name: "Top 50 Global",
    image: img8,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#2a4365",
  },
  {
    id: 2,
    name: "Top 50 India",
    image: img9,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#22543d",
  },
  {
    id: 3,
    name: "Trending India",
    image: img10,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#742a2a",
  },
  {
    id: 4,
    name: "Trending Global",
    image: img16,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#44337a",
  },
  {
    id: 5,
    name: "Mega Hits,",
    image: img11,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#234e52",
  },
  {
    id: 6,
    name: "Happy Favorites",
    image: img15,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#744210",
  },
];

export const songsData = [
  {
    id: 1,
    name: "Song One",
    image: img1,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00",
    bgColor: "#2a4365",
  },
  {
    id: 2,
    name: "Song Two",
    image: img2,
    file: song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:20",
    bgColor: "#22543d",
  },
  {
    id: 3,
    name: "Song Three",
    image: img3,
    file: song3,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:32",
    bgColor: "#742a2a",
  },
  {
    id: 4,
    name: "Song Four",
    image: img4,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:50",
    bgColor: "#44337a",
  },
  {
    id: 5,
    name: "Song Five",
    image: img5,
    file: song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:10",
    bgColor: "#234e52",
  },
  {
    id: 6,
    name: "Song Six",
    image: img14,
    file: song3,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:45",
    bgColor: "#744210",
  },
  {
    id: 7,
    name: "Song Seven",
    image: img7,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:18",
    bgColor: "#744210",
  },
  {
    id: 8,
    name: "Song Eight",
    image: img12,
    file: song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:35",
    bgColor: "#744210",
  },
];

export const singersData = [
  {
    id: 1,
    name: "Taylor Swift",
    image: singer_01,
    bgColor: "#2a4365",
    play_list: [
      {
        id: 1,
        name: "The Moment I Knew",
        image: img1,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:00",
      },
      {
        id: 2,
        name: "I Almost Do",
        image: img2,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:20",
      },
      {
        id: 3,
        name: "Come In With The Rain",
        image: img3,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:32",
      },
      {
        id: 4,
        name: "Girl At Home",
        image: img4,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:50",
      },
      {
        id: 5,
        name: "Last Kiss",
        image: img5,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:10",
      },
    ],
  },
  {
    id: 2,
    name: "Ed Sheeran",
    image: singer_02,
    bgColor: "#22543d",
    play_list: [
      {
        id: 1,
        name: "The Moment I Knew",
        image: img1,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:00",
      },
      {
        id: 2,
        name: "I Almost Do",
        image: img2,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:20",
      },
      {
        id: 3,
        name: "Come In With The Rain",
        image: img3,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:32",
      },
      {
        id: 4,
        name: "Girl At Home",
        image: img4,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:50",
      },
      {
        id: 5,
        name: "Last Kiss",
        image: img5,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:10",
      },
    ],
  },
  {
    id: 3,
    name: "Olivia Rodrigo",
    image: singer_03,
    bgColor: "#742a2a",
    play_list: [
      {
        id: 1,
        name: "The Moment I Knew",
        image: img1,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:00",
      },
      {
        id: 2,
        name: "I Almost Do",
        image: img2,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:20",
      },
      {
        id: 3,
        name: "Come In With The Rain",
        image: img3,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:32",
      },
      {
        id: 4,
        name: "Girl At Home",
        image: img4,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:50",
      },
      {
        id: 5,
        name: "Last Kiss",
        image: img5,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:10",
      },
    ],
  },
  {
    id: 4,
    name: "Bruno Mars",
    image: singer_04,
    bgColor: "#44337a",
    play_list: [
      {
        id: 1,
        name: "The Moment I Knew",
        image: img1,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:00",
      },
      {
        id: 2,
        name: "I Almost Do",
        image: img2,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:20",
      },
      {
        id: 3,
        name: "Come In With The Rain",
        image: img3,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:32",
      },
      {
        id: 4,
        name: "Girl At Home",
        image: img4,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:50",
      },
      {
        id: 5,
        name: "Last Kiss",
        image: img5,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:10",
      },
    ],
  },
  {
    id: 5,
    name: "Ariana Grande",
    image: singer_05,
    bgColor: "#234e52",
    play_list: [
      {
        id: 1,
        name: "The Moment I Knew",
        image: img1,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:00",
      },
      {
        id: 2,
        name: "I Almost Do",
        image: img2,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:20",
      },
      {
        id: 3,
        name: "Come In With The Rain",
        image: img3,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:32",
      },
      {
        id: 4,
        name: "Girl At Home",
        image: img4,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:50",
      },
      {
        id: 5,
        name: "Last Kiss",
        image: img5,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:10",
      },
    ],
  },
  {
    id: 6,
    name: "Justin Bieber",
    image: singer_06,
    bgColor: "#744210",
    play_list: [
      {
        id: 1,
        name: "The Moment I Knew",
        image: img1,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:00",
      },
      {
        id: 2,
        name: "I Almost Do",
        image: img2,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:20",
      },
      {
        id: 3,
        name: "Come In With The Rain",
        image: img3,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:32",
      },
      {
        id: 4,
        name: "Girl At Home",
        image: img4,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:50",
      },
      {
        id: 5,
        name: "Last Kiss",
        image: img5,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:10",
      },
    ],
  },
];
