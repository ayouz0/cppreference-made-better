(function() {
    const rows = document.querySelectorAll('.t-dcl-begin tr');

    rows.forEach(row => {
        if (!row.classList.contains('t-dcl')) return;

        const note = row.innerText;

        let versionCheckStr = note
            .replace(/constexpr since C\+\+\d+/g, '') 
            .replace(/noexcept since C\+\+\d+/g, '');
        const isSinceNewer = /since C\+\+(11|14|17|20|23|26)/.test(versionCheckStr);

        if (isSinceNewer) {
            row.classList.add('cpp98-unsafe');
        } else {
            row.classList.add('cpp98-safe');
        }
    }); 
})();