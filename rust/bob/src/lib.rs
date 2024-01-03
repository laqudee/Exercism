pub fn reply(message: &str) -> &str {
    let message_use = message.trim();
    if message_use.is_empty() {
        return "Fine. Be that way!";
    };
    if message_use == message_use.to_uppercase() && message_use != message_use.to_lowercase() {
        if message_use.ends_with("?") {
            return "Calm down, I know what I'm doing!";
        } else {
            return "Whoa, chill out!";
        }
    }
    if message_use.ends_with("?") {
        return "Sure.";
    }
    "Whatever."
}
