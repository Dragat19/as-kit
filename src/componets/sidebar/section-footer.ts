export function setupFooter(footer: HTMLElement) {
    const profile = document.createElement('div');
    profile.className = 'profile';
    profile.innerHTML = `
        <div class="profile-user">
            <img class="profile-avatar" src="/src/assets/images/photo.png" />
            <div>
                <h6>Albert Sanchez</h6>
                <label>asanchez@gmail.com</label>
            </div>
        </div>
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
    `;
    footer.append(profile);
}