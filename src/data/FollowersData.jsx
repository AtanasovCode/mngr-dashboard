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
        type: "facebook",
    },
    {
        id: 2,
        username: "@nathanf",
        followers: 1044,
        today: 99,
        icon: twitter,
        increase: true,
        type: "twitter"
    },
    {
        id: 3,
        username: "@realnathanf",
        followers: "11k",
        today: 1099,
        icon: instagram,
        increase: true,
        type: "instagram"
    },
    {
        id: 4,
        username: "Nathan F.",
        followers: 8239,
        today: 144,
        icon: youtube,
        increase: false,
        type: "youtube"
    },
];

const overviewData = [
    {
        id: 3251,
        icon: facebook,
        count: 87,
        isIncreasing: true,
        increaseAmount: 3,
        label: "Page Views",
    },
    {
        id: 4769,
        icon: facebook,
        count: 52,
        isIncreasing: false,
        increaseAmount: 2,
        label: "Likes",
    },
    {
        id: 8214,
        icon: instagram,
        count: 5462,
        isIncreasing: true,
        increaseAmount: 2257,
        label: "Likes",
    },
    {
        id: 9458,
        icon: instagram,
        count: "52k",
        isIncreasing: true,
        increaseAmount: 1375,
        label: "Profile Views",
    },
    {
        id: 1537,
        icon: twitter,
        count: 117,
        isIncreasing: true,
        increaseAmount: 303,
        label: "Retweets",
    },
    {
        id: 6498,
        icon: twitter,
        count: 507,
        isIncreasing: true,
        increaseAmount: 553,
        label: "Likes",
    },
    {
        id: 2713,
        icon: youtube,
        count: 107,
        isIncreasing: false,
        increaseAmount: 19,
        label: "Likes",
    },
    {
        id: 5274,
        icon: youtube,
        count: 1407,
        isIncreasing: false,
        increaseAmount: 12,
        label: "Total Views",
    },
]


export { followersData, overviewData }
