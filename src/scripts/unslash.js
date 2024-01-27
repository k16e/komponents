const _unslash = str => str.endsWith('/') ? str.slice(0, -1) : str

export default _unslash