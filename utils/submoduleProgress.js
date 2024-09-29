const submoduleProgress = (submodule) => {
    const topics = submodule.topics;

    if (submodule.topics.length === 0) 
        return 0
    let total = 0

    for(const topic of topics)
        if (topic.completed)
            total += 1

    return Math.floor((total / submodule.topics.length) * 100)
}

module.exports = submoduleProgress;