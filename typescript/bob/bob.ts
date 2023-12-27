export function hey(message: string): string {
  message = message.trim()
  if (message.trim() === '') {
    return Answers.Fine
  } else if (message === message.toUpperCase() && message !== message.toLowerCase()) {
    if (message.endsWith('?')) {
      return Answers.Calm
    } else {
      return Answers.Whoa
    }
  } else if (message.endsWith('?')) {
    return Answers.Sure
  } else {
    return Answers.Whatever
  }
}

enum Answers {
  Fine = 'Fine. Be that way!',
  Calm = 'Calm down, I know what I\'m doing!',
  Whoa = 'Whoa, chill out!',
  Sure = 'Sure.',
  Whatever = 'Whatever.'
}
