import {Question} from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
    options: [
      {
        value: 'A',
        content: 'Don’t dare to interrupt them',
        introvertPoint: 3,
        extrovertPoint: 0,
      },
      {
        value: 'B',
        content: 'Think it’s more important to give them some of your time; work can wait',
        introvertPoint: 2,
        extrovertPoint: 1,
      },
      {
        value: 'C',
        content: 'Listen, but with only with half an ear',
        introvertPoint: 1,
        extrovertPoint: 2,
      },
      {
        value: 'D',
        content: 'Interrupt and explain that you are really busy at the moment',
        introvertPoint: 0,
        extrovertPoint: 3,
      },
    ],
  },
  {
    id: 2,
    text: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
    options: [
      {
        value: 'A',
        content: 'Look at your watch every two minutes',
        introvertPoint: 3,
        extrovertPoint: 0,
      },
      {
        value: 'B',
        content: 'Bubble with inner anger, but keep quiet',
        introvertPoint: 2,
        extrovertPoint: 1,
      },
      {
        value: 'C',
        content:
          'Explain to other equally impatient people in the room that the doctor is always running late',
        introvertPoint: 1,
        extrovertPoint: 2,
      },
      {
        value: 'D',
        content: 'Complain in a loud voice, while tapping your foot impatiently',
        introvertPoint: 0,
        extrovertPoint: 3,
      },
    ],
  },
  {
    id: 3,
    text: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
    options: [
      {
        value: 'A',
        content: 'Don’t dare contradict them',
        introvertPoint: 3,
        extrovertPoint: 0,
      },
      {
        value: 'B',
        content: 'Think that they are obviously right',
        introvertPoint: 2,
        extrovertPoint: 1,
      },
      {
        value: 'C',
        content: 'Defend your own point of view, tooth and nail',
        introvertPoint: 1,
        extrovertPoint: 2,
      },
      {
        value: 'D',
        content: 'Continuously interrupt your colleague',
        introvertPoint: 0,
        extrovertPoint: 3,
      },
    ],
  },
  {
    id: 4,
    text: 'You are taking part in a guided tour of a museum. You:',
    options: [
      {
        value: 'A',
        content: 'Are a bit too far towards the back so don’t really hear what the guide is saying',
        introvertPoint: 3,
        extrovertPoint: 0,
      },
      {
        value: 'B',
        content: 'Follow the group without question',
        introvertPoint: 2,
        extrovertPoint: 1,
      },
      {
        value: 'C',
        content: 'Make sure that everyone is able to hear properly',
        introvertPoint: 1,
        extrovertPoint: 2,
      },
      {
        value: 'D',
        content: 'Are right up the front, adding your own comments in a loud voice',
        introvertPoint: 0,
        extrovertPoint: 3,
      },
    ],
  },
  {
    id: 5,
    text: 'During dinner parties at your home, you have a hard time with people who:',
    options: [
      {
        value: 'A',
        content: 'Ask you to tell a story in front of everyone else',
        introvertPoint: 3,
        extrovertPoint: 0,
      },
      {
        value: 'B',
        content: 'Talk privately between themselves',
        introvertPoint: 2,
        extrovertPoint: 1,
      },
      {
        value: 'C',
        content: 'Hang around you all evening',
        introvertPoint: 1,
        extrovertPoint: 2,
      },
      {
        value: 'D',
        content: 'Always drag the conversation back to themselves',
        introvertPoint: 0,
        extrovertPoint: 3,
      },
    ],
  },
  {
    id: 6,
    text: 'You crack a joke at work, but nobody seems to have noticed. You:',
    options: [
      {
        value: 'A',
        content: 'Think it’s for the best — it was a lame joke anyway',
        introvertPoint: 3,
        extrovertPoint: 0,
      },
      {
        value: 'B',
        content: 'Wait to share it with your friends after work',
        introvertPoint: 2,
        extrovertPoint: 1,
      },
      {
        value: 'C',
        content: 'Try again a bit later with one of your colleagues',
        introvertPoint: 2,
        extrovertPoint: 1,
      },
      {
        value: 'D',
        content: 'Keep telling it until they pay attention',
        introvertPoint: 0,
        extrovertPoint: 3,
      },
    ],
  },
  {
    id: 7,
    text: 'This morning, your agenda seems to be free. You:',
    options: [
      {
        value: 'A',
        content: 'Know that somebody will find a reason to come and bother you',
        introvertPoint: 3,
        extrovertPoint: 0,
      },
      {
        value: 'B',
        content: 'Heave a sigh of relief and look forward to a day without stress',
        introvertPoint: 0,
        extrovertPoint: 3,
      },
      {
        value: 'C',
        content: 'Question your colleagues about a project that’s been worrying you',
        introvertPoint: 1,
        extrovertPoint: 2,
      },
      {
        value: 'D',
        content: 'Pick up the phone and start filling up your agenda with meetings',
        introvertPoint: 0,
        extrovertPoint: 3,
      },
    ],
  },
  {
    id: 8,
    text: 'During dinner, the discussion moves to a subject about which you know nothing at all. You:',
    options: [
      {
        value: 'A',
        content: 'Don’t dare show that you don’t know anything about the subject',
        introvertPoint: 0,
        extrovertPoint: 3,
      },
      {
        value: 'B',
        content: 'Barely follow the discussion',
        introvertPoint: 3,
        extrovertPoint: 0,
      },
      {
        value: 'C',
        content: 'Ask lots of questions to learn more about it',
        introvertPoint: 0,
        extrovertPoint: 3,
      },
      {
        value: 'D',
        content: 'Change the subject of discussion',
        introvertPoint: 3,
        extrovertPoint: 1,
      },
    ],
  },
];
