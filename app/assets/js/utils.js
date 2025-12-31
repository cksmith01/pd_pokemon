
function capitalizer(value) {
    if (value && value.trim().length > 0) {
        return value
            .toLowerCase()
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    } else {
        return value;
    }
}

export { capitalizer };