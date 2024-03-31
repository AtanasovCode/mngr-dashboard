import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import twitter from '../assets/icon-twitter.svg'
import youtube from '../assets/icon-youtube.svg';

const followersData = [
    {
        id: 1,
        username: "@nathanf",
        followers: 1987,
        today: 12,
        icon: facebook,
        increase: true,
    },
    {
        id: 2,
        username: "@nathanf",
        followers: 1044,
        today: 99,
        icon: twitter,
        increase: true,
    },
    {
        id: 3,
        username: "@realnathanf",
        followers: 11000,
        today: 1099,
        icon: instagram,
        increase: true,
    },
    {
        id: 4,
        username: "Nathan F.",
        subscribers: 8239,
        today: 144,
        icon: youtube,
        increase: false,
    },
]

export { followersData }
