// Khởi tạo ứng dụng
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    // Load dữ liệu phần mềm
    loadSoftwareData();

    // Setup event listeners
    setupEventListeners();

    // Hiển thị tất cả phần mềm ban đầu
    displayAllSoftware();

    // Cập nhật số lượng phần mềm theo danh mục
    updateCategoryCounts();
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function () {
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });

    // Modal close
    const closeModal = document.getElementById('closeModal');
    const modal = document.getElementById('softwareModal');

    closeModal.addEventListener('click', closeSoftwareModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeSoftwareModal();
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeSoftwareModal();
        }
    });
}

function loadSoftwareData() {
    // Dữ liệu sẽ được load từ software-data.js
    if (typeof softwareData !== 'undefined') {
        window.allSoftware = softwareData;
    }
}

function displayAllSoftware() {
    const softwareList = document.getElementById('softwareList');
    softwareList.innerHTML = '';

    if (!window.allSoftware) return;

    window.allSoftware.forEach((software, index) => {
        const softwareItem = createSoftwareItem(software, index);
        softwareList.appendChild(softwareItem);
    });
}

function createSoftwareItem(software, index) {
    const item = document.createElement('div');
    item.className = 'software-item';
    item.style.animationDelay = `${index * 0.1}s`;

    const versionCount = software.versions ? software.versions.length : 0;

    item.innerHTML = `
        <div class="software-item-header">
            <div class="software-item-icon">
                <i class="${software.icon}"></i>
            </div>
            <div class="software-item-info">
                <h3>${software.name}</h3>
                <p>${software.description}</p>
            </div>
        </div>
        <div class="software-item-footer">
            <span class="version-count">${versionCount} phiên bản</span>
            <button class="download-btn" onclick="openSoftwareModal('${software.id}')">
                <i class="fas fa-download"></i> Tải xuống
            </button>
        </div>
    `;

    return item;
}

function openSoftwareModal(softwareId) {
    const software = window.allSoftware.find(s => s.id === softwareId);
    if (!software) return;

    const modal = document.getElementById('softwareModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalDescription = document.getElementById('modalDescription');
    const versionsList = document.getElementById('versionsList');

    // Cập nhật thông tin modal
    modalTitle.textContent = software.name;
    modalIcon.className = software.icon;
    modalDescription.textContent = software.description;

    // Tạo danh sách phiên bản
    versionsList.innerHTML = '';
    if (software.versions && software.versions.length > 0) {
        software.versions.forEach(version => {
            const versionItem = createVersionItem(version);
            versionsList.appendChild(versionItem);
        });
    } else {
        versionsList.innerHTML = '<p>Chưa có phiên bản nào được cập nhật.</p>';
    }

    // Hiển thị modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function createVersionItem(version) {
    const item = document.createElement('div');
    item.className = 'version-item';

    // Kiểm tra nếu có editions
    if (version.editions && version.editions.length > 0) {
        const editionsHtml = version.editions.map(edition => {
            const editionLinksHtml = edition.links.map(link => `
                <a href="${link.url}" target="_blank" class="edition-link">
                    <i class="${link.icon}"></i>
                    ${link.name}
                </a>
            `).join('');

            return `
                <div class="edition-item">
                    <div class="edition-header">
                        <span class="edition-name">${edition.name}</span>
                        <span class="edition-size">${edition.size}</span>
                    </div>
                    <div class="edition-description">${edition.description}</div>
                    <div class="edition-links">
                        ${editionLinksHtml}
                    </div>
                </div>
            `;
        }).join('');

        item.innerHTML = `
            <div class="version-header">
                <span class="version-name">${version.name}</span>
                <span class="version-size">${version.size}</span>
            </div>
            <div class="editions-container">
                ${editionsHtml}
            </div>
        `;
    } else {
        // Fallback cho cấu trúc cũ
        const linksHtml = version.links ? version.links.map(link => `
            <a href="${link.url}" target="_blank" class="version-link">
                <i class="${link.icon}"></i>
                ${link.name}
            </a>
        `).join('') : '';

        item.innerHTML = `
            <div class="version-header">
                <span class="version-name">${version.name}</span>
                <span class="version-size">${version.size}</span>
            </div>
            <div class="version-links">
                ${linksHtml}
            </div>
        `;
    }

    return item;
}

function closeSoftwareModal() {
    const modal = document.getElementById('softwareModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const softwareList = document.getElementById('softwareList');

    if (!window.allSoftware) return;

    const filteredSoftware = window.allSoftware.filter(software =>
        software.name.toLowerCase().includes(searchTerm) ||
        software.description.toLowerCase().includes(searchTerm) ||
        software.category.toLowerCase().includes(searchTerm)
    );

    softwareList.innerHTML = '';
    filteredSoftware.forEach((software, index) => {
        const softwareItem = createSoftwareItem(software, index);
        softwareList.appendChild(softwareItem);
    });
}

function filterByCategory(category) {
    const softwareList = document.getElementById('softwareList');

    if (!window.allSoftware) return;

    const filteredSoftware = window.allSoftware.filter(software =>
        software.category === category
    );

    softwareList.innerHTML = '';
    filteredSoftware.forEach((software, index) => {
        const softwareItem = createSoftwareItem(software, index);
        softwareList.appendChild(softwareItem);
    });

    // Scroll to software list
    softwareList.scrollIntoView({ behavior: 'smooth' });
}

function updateCategoryCounts() {
    if (!window.allSoftware) return;

    const categories = ['windows', 'office', 'graphics', 'tools'];

    categories.forEach(category => {
        const count = window.allSoftware.filter(software => software.category === category).length;
        const categoryCard = document.querySelector(`[data-category="${category}"]`);
        const countElement = categoryCard.querySelector('.software-count');
        countElement.textContent = `${count} phần mềm`;
    });
}

// Utility functions
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Export functions for external use
window.openSoftwareModal = openSoftwareModal;
window.closeSoftwareModal = closeSoftwareModal;

