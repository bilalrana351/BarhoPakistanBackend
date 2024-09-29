const submoduleProgress = require('../utils/submoduleProgress')

const moduleProgress = (module) => {
    const submodules = module.submodules;

    if (submodules.length === 0)
        return 0

    let total = 0

    for(const submodule of submodules)
        total += (submoduleProgress(submodule) / 100);

    return Math.floor((total / module.submodules.length) * 100)
}

module.exports = moduleProgress;