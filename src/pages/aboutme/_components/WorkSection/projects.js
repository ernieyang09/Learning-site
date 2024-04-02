import swagpack from '@site/static/img/swagpack.png'
import trendorg from '@site/static/img/trendorg.jpg'
import oring from '@site/static/img/oring.png'
import giftcard from '@site/static/img/giftcard.png'
import TonHH from '@site/static/img/tonhackerhouse.png'

const projects = [
  {
    name: 'TON hackerhouse',
    desc: "The world's first TON Hacker House. Hosted by TONX and Ton foundation",
    comment: '',
    link: 'https://tonhackerhouse.com/',
    img: TonHH,
    tags: ['React', 'Next.js'],
  },
  {
    name: 'Binance Gift Card',
    desc: 'Share happiness using crypto gift card',
    comment: '',
    link: 'https://www.binance.com/en/gift-card',
    img: giftcard,
    tags: ['React', 'Mini Program'],
  },
  {
    name: 'Swagpack',
    desc: 'POD e-commerce',
    comment: 'Inactive',
    link: '',
    img: swagpack,
    tags: ['React', 'GraphQL', 'Typescript', 'AWS'],
  },
  {
    name: 'Trend Video',
    desc: 'Trend foundation video platform',
    link: 'https://video.trend.org/',
    img: trendorg,
    tags: ['React', 'Python', 'Wagtail', 'Farget'],
  },
  {
    name: 'Oring IIOT',
    desc: 'Professional industrial IoT platform',
    link: 'https://www.paas.oringnet.cloud/',
    img: oring,
    tags: ['React', 'node.js', 'mqtt', 'docker'],
  },
]

export default projects
