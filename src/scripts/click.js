export default function Click(target, cb) {
    target.addEventListener('click', () => cb())
}