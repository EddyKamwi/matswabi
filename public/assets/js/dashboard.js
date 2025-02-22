// Dashboard Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const sidebar = document.querySelector('.dashboard-sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarClose = document.querySelector('.sidebar-close');
    const userMenu = document.querySelector('.user-menu');
    const notificationsBtn = document.querySelector('.notifications');
    const searchInput = document.querySelector('.header-search input');
    const searchToggle = document.querySelector('.search-toggle');

    // Sidebar Toggle
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // User Menu Dropdown
    let userMenuDropdown = null;

    userMenu.addEventListener('click', (e) => {
        e.stopPropagation();

        if (!userMenuDropdown) {
            userMenuDropdown = document.createElement('div');
            userMenuDropdown.className = 'user-dropdown';
            userMenuDropdown.innerHTML = `
                <ul>
                    <li><a href="profile.html"><i class="fas fa-user"></i> Profile</a></li>
                    <li><a href="settings.html"><i class="fas fa-cog"></i> Settings</a></li>
                    <li><a href="#" class="logout-link"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                </ul>
            `;
            userMenu.appendChild(userMenuDropdown);
        } else {
            userMenuDropdown.remove();
            userMenuDropdown = null;
        }
    });

    // Close user menu when clicking outside
    document.addEventListener('click', () => {
        if (userMenuDropdown) {
            userMenuDropdown.remove();
            userMenuDropdown = null;
        }
    });

    // Mobile search toggle
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            const headerSearch = document.querySelector('.header-search');
            headerSearch.classList.toggle('active');
            if (headerSearch.classList.contains('active')) {
                searchInput.focus();
            }
        });
    }

    // Close mobile search when clicking outside
    document.addEventListener('click', (e) => {
        const headerSearch = document.querySelector('.header-search');
        if (headerSearch?.classList.contains('active')) {
            if (!headerSearch.contains(e.target) && !searchToggle.contains(e.target)) {
                headerSearch.classList.remove('active');
            }
        }
    });

    // Search functionality with debounce
    let searchTimeout;
    searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const searchTerm = e.target.value.trim();

        if (searchTerm.length === 0) {
            // Clear search results
            return;
        }

        searchTimeout = setTimeout(() => {
            // Show loading state
            searchInput.parentElement.classList.add('loading');

            // Simulate search API call
            setTimeout(() => {
                console.log('Searching for:', searchTerm);
                // Remove loading state
                searchInput.parentElement.classList.remove('loading');

                // Here you would typically:
                // 1. Make API call to search endpoint
                // 2. Process results
                // 3. Display results in a dropdown
            }, 500);
        }, 300);
    });

    // Notifications system
    const notifications = [
        {
            id: 1,
            type: 'booking',
            message: 'New booking request received',
            time: '5 minutes ago',
            read: false
        },
        {
            id: 2,
            type: 'client',
            message: 'New client registration',
            time: '1 hour ago',
            read: false
        },
        {
            id: 3,
            type: 'payment',
            message: 'Payment received',
            time: '2 hours ago',
            read: true
        }
    ];

    function updateNotificationBadge() {
        const unreadCount = notifications.filter(n => !n.read).length;
        const badge = notificationsBtn.querySelector('.badge');

        if (unreadCount > 0) {
            badge.textContent = unreadCount;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }

    function markAllNotificationsAsRead() {
        notifications.forEach(n => n.read = true);
        updateNotificationBadge();

        const notificationItems = document.querySelectorAll('.notifications-dropdown li');
        notificationItems.forEach(item => item.classList.remove('unread'));
    }

    // Initialize notification badge
    updateNotificationBadge();

    // Notifications dropdown
    notificationsBtn?.addEventListener('click', (e) => {
        e.stopPropagation();

        if (!notificationsDropdown) {
            notificationsDropdown = document.createElement('div');
            notificationsDropdown.className = 'notifications-dropdown';

            // Create notifications content
            const content = `
                <div class="notifications-header">
                    <h3>Notifications</h3>
                    <button class="mark-all-read">Mark all as read</button>
                </div>
                <ul>
                    ${notifications.map(notification => `
                        <li class="${notification.read ? '' : 'unread'}" data-id="${notification.id}">
                            <span class="notification-icon">
                                <i class="fas ${getNotificationIcon(notification.type)}"></i>
                            </span>
                            <div class="notification-content">
                                <p>${notification.message}</p>
                                <span class="time">${notification.time}</span>
                            </div>
                        </li>
                    `).join('')}
                </ul>
                <a href="/notifications" class="view-all">View all notifications</a>
            `;

            notificationsDropdown.innerHTML = content;
            notificationsBtn.appendChild(notificationsDropdown);

            // Add event listener for "Mark all as read"
            const markAllReadBtn = notificationsDropdown.querySelector('.mark-all-read');
            markAllReadBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                markAllNotificationsAsRead();
            });

            // Add event listeners for individual notifications
            const notificationItems = notificationsDropdown.querySelectorAll('li');
            notificationItems.forEach(item => {
                item.addEventListener('click', () => {
                    const id = parseInt(item.dataset.id);
                    const notification = notifications.find(n => n.id === id);
                    if (notification && !notification.read) {
                        notification.read = true;
                        item.classList.remove('unread');
                        updateNotificationBadge();
                    }
                });
            });
        } else {
            notificationsDropdown.remove();
            notificationsDropdown = null;
        }
    });

    function getNotificationIcon(type) {
        switch (type) {
            case 'booking':
                return 'fa-calendar-check';
            case 'client':
                return 'fa-user';
            case 'payment':
                return 'fa-credit-card';
            default:
                return 'fa-bell';
        }
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        if (notificationsDropdown) {
            notificationsDropdown.remove();
            notificationsDropdown = null;
        }
        if (userMenuDropdown) {
            userMenuDropdown.remove();
            userMenuDropdown = null;
        }
    });

    // Theme Toggle
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    const themeToggle = document.querySelector('.theme-toggle');
    const darkModeIcon = themeToggle?.querySelector('i');

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', isDarkMode);
        darkModeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeIcon.className = 'fas fa-sun';
    }

    themeToggle?.addEventListener('click', toggleDarkMode);

    // Active Link Highlight
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.parentElement.classList.add('active');
        }
    });

    // Period Change Handlers
    const chartPeriodSelects = document.querySelectorAll('.chart-period');

    chartPeriodSelects.forEach(select => {
        select.addEventListener('change', (e) => {
            const period = e.target.value;
            // Update chart data based on selected period
            console.log('Changing period to:', period);
            // Implement actual period change logic here
        });
    });

    // Activity List
    function createActivityList() {
        const activityList = document.querySelector('.activity-list');
        if (!activityList) return;

        const activities = [
            {
                icon: 'fas fa-calendar-check',
                title: 'New funeral service booking',
                description: 'John Doe booked a premium funeral service package',
                time: '5 minutes ago',
                status: 'pending',
                priority: 'high'
            },
            {
                icon: 'fas fa-credit-card',
                title: 'Payment received',
                description: 'Payment of $2,500 received for booking #1234',
                time: '1 hour ago',
                status: 'completed',
                priority: 'normal'
            },
            {
                icon: 'fas fa-user-plus',
                title: 'New client registered',
                description: 'Sarah Smith created a new account',
                time: '2 hours ago',
                status: 'completed',
                priority: 'normal'
            },
            {
                icon: 'fas fa-tasks',
                title: 'Service status updated',
                description: 'Funeral service #1235 marked as completed',
                time: '3 hours ago',
                status: 'completed',
                priority: 'normal'
            }
        ];

        activityList.innerHTML = activities.map(activity => `
            <div class="activity-item ${activity.status} priority-${activity.priority}">
                <div class="activity-icon">
                    <i class="${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-header">
                        <h4 class="activity-title">${activity.title}</h4>
                        <span class="activity-time">${activity.time}</span>
                    </div>
                    <p class="activity-description">${activity.description}</p>
                    <div class="activity-footer">
                        <span class="activity-status status-${activity.status}">
                            ${activity.status}
                        </span>
                        ${activity.priority === 'high' ? `
                            <span class="activity-priority">
                                <i class="fas fa-arrow-up"></i> High Priority
                            </span>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Period Selection Handler
    function handlePeriodSelection() {
        const periodSelects = document.querySelectorAll('.period-select');

        periodSelects.forEach(select => {
            select.addEventListener('change', (e) => {
                const period = e.target.value;
                const section = e.target.closest('.dashboard-section');

                // Show loading state
                if (section) {
                    section.classList.add('loading');
                }

                // Simulate data fetch
                setTimeout(() => {
                    // Update data based on selected period
                    updateSectionData(section, period);

                    // Remove loading state
                    if (section) {
                        section.classList.remove('loading');
                    }
                }, 800);
            });
        });
    }

    // Update section data based on period
    function updateSectionData(section, period) {
        if (!section) return;

        // Example data update logic
        if (section.querySelector('.activity-list')) {
            // Update activity list data
            createActivityList();
        }
    }

    // Initialize dashboard features
    document.addEventListener('DOMContentLoaded', () => {
        // Create initial activity list
        createActivityList();

        // Initialize period selection
        handlePeriodSelection();

        // Update overview cards with real data
        updateOverviewCards();

        // Initialize charts
        initializeCharts();
    });

    function updateOverviewCards() {
        // Placeholder for real data fetching
        const overviewData = {
            totalBookings: 248,
            totalRevenue: 45600,
            activeClients: 156,
            completedServices: 189
        };

        // Update the cards with the data
        // Implementation would go here
    }

    function initializeCharts() {
        // Additional chart initialization if needed
    }

    // Responsive Handling
    function handleResponsive() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
    }

    window.addEventListener('resize', handleResponsive);

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add loading states for async operations
    function showLoading(element) {
        element.classList.add('loading');
    }

    function hideLoading(element) {
        element.classList.remove('loading');
    }

    // Error handling
    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-notification';
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);

        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }

    // Success notification
    function showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-notification';
        successDiv.textContent = message;
        document.body.appendChild(successDiv);

        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    // Export functions for testing
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            toggleDarkMode,
            updateNotificationBadge,
            showError,
            showSuccess
        };
    }
}); 