import Swup from 'swup'
import SwupProgressPlugin from '@swup/progress-plugin'
import SwupHeadPlugin from '@swup/head-plugin'
import _active from '@scripts/active'
import _flipper from '@scripts/flipper'
import _intoView from '@scripts/into-view'
import _modal from '@scripts/modal'
import _backdrop from '@scripts/backdrop'
import _submit from '@scripts/form'
import _prefilters from '@scripts/prefilters'
import _flipfone from '@scripts/flipfone'
import _fuzzySearch from '@scripts/fuzzy-search'
import _elevatorPitch from '@scripts/elevator-pitch'
import _gtag from '@scripts/gtag'

const swup = new Swup({
    animationSelector: '[class*="swup-"]',
    containers: ['#swup', '#footer'],
    animateHistoryBrowsing: true,
    plugins: [
        new SwupProgressPlugin({
            className: 'swup-progress-bar',
            delay: 150,
            finishAnimation: false,
        }),
        new SwupHeadPlugin(),
    ],
})

document.addEventListener('DOMContentLoaded', () => {
    once()
    init()
})
swup.hooks.on('page:view', () => init())

function init() {
    _active()
    _intoView()
    _flipper()
    _modal()
    _backdrop()
    _submit()
    _flipfone()
    _fuzzySearch()
    _elevatorPitch()
    _gtag()
}

function once() {
    _prefilters()
}