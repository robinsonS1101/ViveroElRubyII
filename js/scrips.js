
        // Datos de productos (almacenados en localStorage)
        let products = JSON.parse(localStorage.getItem('viveroProducts')) || [
            {
                id: 1,
                title: "Manzano",
                description: "Árbol frutal de clima templado. Produce manzanas crujientes y dulces.",
                fullDescription: "El manzano es un árbol frutal de clima templado que produce manzanas crujientes y dulces. Ideal para huertos caseros y comerciales. Requiere suelo bien drenado y exposición solar directa. Tiempo de cosecha: 2-3 años después de la siembra. Incluye asesoría de cuidado y mantenimiento.",
                price: "$45.000",
                image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSIxMDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMDBmZjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+0JjQsNC30L3QvtC5PC90ZXh0Pjwvc3ZnPg==",
                category: "frutales"
            },
            {
                id: 2,
                title: "Limón Tahití",
                description: "Árbol de limón de alta productividad. Ideal para zonas cálidas.",
                fullDescription: "El limón Tahití es una variedad de alta productividad, ideal para zonas cálidas. Produce frutos jugosos con alto contenido de vitamina C. Resistente a plagas y enfermedades comunes. Perfecto para cultivo orgánico. Incluye guía de poda y fertilización.",
                price: "$38.000",
                image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSIxMDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMDBmZjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+0JvQuNC80Y7RjTwvdGV4dD48L3N2Zz4=",
                category: "frutales"
            },
            {
                id: 3,
                title: "Pino Limón",
                description: "Árbol ornamental con agradable aroma a cítricos. Ideal para jardines.",
                fullDescription: "El pino limón es una variedad ornamental que desprende un agradable aroma a cítricos. Crece hasta 6 metros de altura y es perfecto para jardines residenciales y parques. Requiere poco mantenimiento y es resistente a condiciones climáticas variadas.",
                price: "$52.000",
                image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSIxMDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMDBmZjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+0JjQuNC90L7QvNGOPC90ZXh0Pjwvc3ZnPg==",
                category: "ornamentales"
            },
            {
                id: 4,
                title: "Fertilizante Orgánico",
                description: "Abono natural para todo tipo de plantas. Mejora la calidad del suelo.",
                fullDescription: "Nuestro fertilizante orgánico está elaborado a base de materia vegetal compostada y enriquecida con minerales naturales. Mejora la estructura del suelo, favorece el crecimiento radicular y aumenta la resistencia de las plantas a plagas y enfermedades. Presentación: saco de 5 kg.",
                price: "$25.000",
                image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSIxMDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMDBmZjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RmVydGlsaXphbnRlPC90ZXh0Pjwvc3ZnPg==",
                category: "insumos"
            },
            {
                id: 5,
                title: "Prueba",
                description: "Abono natural para todo tipo de plantas. Mejora la calidad del suelo.",
                fullDescription: "Nuestro fertilizante orgánico está elaborado a base de materia vegetal compostada y enriquecida con minerales naturales. Mejora la estructura del suelo, favorece el crecimiento radicular y aumenta la resistencia de las plantas a plagas y enfermedades. Presentación: saco de 5 kg.",
                price: "$25.000",
                image: "img/Cercaviva.jpeg",
                category: "insumos"
            }
        ];

        // Datos de testimonios
        let testimonials = JSON.parse(localStorage.getItem('viveroTestimonials')) || [
            {
                id: 1,
                text: "Compré varios árboles frutales en El Ruby y estoy muy satisfecho con la calidad. Todos crecieron sanos y fuertes. El asesoramiento que me dieron fue excelente.",
                author: "Juan Carlos",
                role: "Agricultor",
                rating: 5
            },
            {
                id: 2,
                text: "Como agricultor, lo que más valoro de mi sistema de riego es que es fácil de manejar directamente en el campoGracias a esto ahorro agua, reduzco costos y tengo la seguridad de que mis plantaciones reciben siempre el riego adecuado de forma práctica y confiable.",
                author: "María González",
                role: "Cliente residencial",
                rating: 4.5
            },
            {
                id: 3,
                text: "Como paisajista, he trabajado con muchos viveros, pero El Ruby destaca por la calidad de sus plantas y su variedad. Siempre encuentro lo que necesito para mis proyectos.",
                author: "Roberto Pazmiño",
                role: "Paisajista profesional",
                rating: 5
            }
        ];

        // Estado de autenticación
        let isAuthenticated = localStorage.getItem('viveroAuth') === 'true' || false;
        let currentEditingProduct = null;
        let currentEditingTestimonial = null;

        // Elementos DOM
        const productsContainer = document.getElementById('products-container');
        const adminPanel = document.getElementById('admin-panel');
        const adminBtn = document.getElementById('admin-btn');
        const logoutBtn = document.getElementById('logout-btn');
        const adminLogoutBtn = document.getElementById('admin-logout-btn');
        const loginModal = document.getElementById('login-modal');
        const loginForm = document.getElementById('login-form');
        const productForm = document.getElementById('product-form');
        const testimonialForm = document.getElementById('testimonial-form');
        const productModal = document.getElementById('product-modal');
        const modalClose = document.getElementById('modal-close');
        const loginClose = document.getElementById('login-close');
        const backToTop = document.getElementById('back-to-top');
        const filterButtons = document.querySelectorAll('.filter-btn');

        // Guardar productos en localStorage
        function saveProducts() {
            localStorage.setItem('viveroProducts', JSON.stringify(products));
        }

        // Guardar testimonios en localStorage
        function saveTestimonials() {
            localStorage.setItem('viveroTestimonials', JSON.stringify(testimonials));
        }

        // Renderizar productos en la página
        function renderProducts(filter = 'all') {
            productsContainer.innerHTML = '';
            
            const filteredProducts = filter === 'all' 
                ? products 
                : products.filter(product => product.category === filter);
            
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.setAttribute('data-category', product.category);
                productCard.setAttribute('data-id', product.id);
                
                productCard.innerHTML = `
                    <div class="product-img">
                        ${product.image ? `<img src="${product.image}" alt="${product.title}">` : '<i class="fas fa-tree"></i>'}
                    </div>
                    <div class="product-info">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <div class="product-price">${product.price}</div>
                        <div class="product-actions">
                            <a href="#" class="view-details" data-id="${product.id}">
                                <i class="fas fa-eye"></i> Ver Detalles
                            </a>
                            ${isAuthenticated ? `
                            <button class="edit-btn" data-id="${product.id}">
                                <i class="fas fa-edit"></i> Editar
                            </button>
                            <button class="delete-btn" data-id="${product.id}">
                                <i class="fas fa-trash"></i> Eliminar
                            </button>
                            ` : ''}
                            <a href="https://wa.me/573112945754?text=Hola,%20me%20interesa%20cotizar%20el%20producto:%20${encodeURIComponent(product.title)}" class="whatsapp-btn" target="_blank">
                                <i class="fab fa-whatsapp"></i> Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>
                `;
                
                productsContainer.appendChild(productCard);
            });
            
            // Añadir event listeners a los botones de ver detalles
            document.querySelectorAll('.view-details').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const productId = parseInt(this.getAttribute('data-id'));
                    showProductDetails(productId);
                });
            });
            
            // Añadir event listeners a los botones de editar y eliminar
            if (isAuthenticated) {
                document.querySelectorAll('.edit-btn').forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        const productId = parseInt(this.getAttribute('data-id'));
                        loadProductForEditing(productId);
                    });
                });
                
                document.querySelectorAll('.delete-btn').forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        const productId = parseInt(this.getAttribute('data-id'));
                        deleteProduct(productId);
                    });
                });
            }
        }

        // Renderizar testimonios
        function renderTestimonials() {
            const testimonialsContainer = document.querySelector('.testimonials-container');
            if (!testimonialsContainer) return;
            
            testimonialsContainer.innerHTML = '';
            
            testimonials.forEach(testimonial => {
                const stars = getStarRating(testimonial.rating);
                
                const testimonialCard = document.createElement('div');
                testimonialCard.className = 'testimonial-card';
                testimonialCard.innerHTML = `
                    <div class="testimonial-text">"${testimonial.text}"</div>
                    <div class="testimonial-author">
                        <div class="author-avatar">${testimonial.author.charAt(0)}</div>
                        <div class="author-info">
                            <h4>${testimonial.author}</h4>
                            <p>${testimonial.role}</p>
                            <div class="rating">${stars}</div>
                        </div>
                    </div>
                `;
                
                testimonialsContainer.appendChild(testimonialCard);
            });
            
            // Renderizar testimonios en panel de administración si está autenticado
            if (isAuthenticated) {
                renderAdminTestimonials();
            }
        }

        // Obtener estrellas de calificación
        function getStarRating(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - Math.ceil(rating);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            return stars;
        }

        // Mostrar detalles del producto en modal
        function showProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const modalContent = document.getElementById('modal-product-content');
            modalContent.innerHTML = `
                <div class="modal-product-img">
                    ${product.image ? `<img src="${product.image}" alt="${product.title}">` : '<i class="fas fa-tree"></i>'}
                </div>
                <div class="modal-product-info">
                    <h2>${product.title}</h2>
                    <div class="modal-product-price">${product.price}</div>
                    <p class="modal-product-description">${product.fullDescription}</p>
                    <a href="https://wa.me/573112945754?text=Hola,%20me%20interesa%20cotizar%20el%20producto:%20${encodeURIComponent(product.title)}" class="whatsapp-btn" target="_blank" style="display: inline-flex; width: auto; margin-top: 20px;">
                        <i class="fab fa-whatsapp"></i> Cotizar por WhatsApp
                    </a>
                </div>
            `;
            
            productModal.style.display = 'flex';
        }

        // Inicializar filtros de productos
        function initFilters() {
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Quitar clase active de todos los botones
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Agregar clase active al botón clickeado
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    renderProducts(filter);
                });
            });
        }

        // Inicializar modales
        function initModal() {
            // Cerrar modal al hacer clic en la X
            modalClose.addEventListener('click', function() {
                productModal.style.display = 'none';
            });
            
            loginClose.addEventListener('click', function() {
                loginModal.style.display = 'none';
            });
            
            // Cerrar modal al hacer clic fuera del contenido
            window.addEventListener('click', function(e) {
                if (e.target === productModal) {
                    productModal.style.display = 'none';
                }
                if (e.target === loginModal) {
                    loginModal.style.display = 'none';
                }
            });
        }

        // Inicializar sistema de login
        function initLoginSystem() {
            // Mostrar/ocultar panel de administración
            adminBtn.addEventListener('click', function() {
                if (isAuthenticated) {
                    document.getElementById('admin-section').scrollIntoView({ behavior: 'smooth' });
                } else {
                    loginModal.style.display = 'flex';
                }
            });
            
            // Cerrar sesión
            logoutBtn.addEventListener('click', function() {
                logout();
            });
            
            adminLogoutBtn.addEventListener('click', function() {
                logout();
            });
            
            // Enviar formulario de login
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const username = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                
                // Credenciales hardcodeadas para demo (en producción usar autenticación segura)
                if (username === 'admin' && password === 'admin123') {
                    login();
                } else {
                    alert('Usuario o contraseña incorrectos');
                    loginForm.reset();
                }
            });
        }

        // Función de login
        function login() {
            isAuthenticated = true;
            localStorage.setItem('viveroAuth', 'true');
            loginModal.style.display = 'none';
            logoutBtn.style.display = 'block';
            adminPanel.style.display = 'block';
            renderProducts();
            renderTestimonials();
            alert('Sesión iniciada correctamente');
        }

        // Función de logout
        function logout() {
            isAuthenticated = false;
            localStorage.removeItem('viveroAuth');
            logoutBtn.style.display = 'none';
            adminPanel.style.display = 'none';
            renderProducts();
            alert('Sesión cerrada correctamente');
        }

        // Verificar estado de autenticación al cargar la página
        function checkAuthStatus() {
            if (isAuthenticated) {
                logoutBtn.style.display = 'block';
                adminPanel.style.display = 'block';
            } else {
                logoutBtn.style.display = 'none';
                adminPanel.style.display = 'none';
            }
        }

        // Inicializar vista previa de imagen
        function initImagePreview() {
            const imageInput = document.getElementById('product-image');
            const imagePreview = document.getElementById('image-preview');
            
            imageInput.addEventListener('change', function() {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Vista previa">`;
                    };
                    
                    reader.readAsDataURL(file);
                } else {
                    imagePreview.innerHTML = '<p>Vista previa de la imagen</p>';
                }
            });
        }

        // Inicializar animaciones
        function initAnimations() {
            // Animación de elementos al hacer scroll
            const animatedElements = document.querySelectorAll('.product-card, .service-card, .about-image, .testimonial-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeIn 1s forwards';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            animatedElements.forEach(el => {
                observer.observe(el);
            });
        }

        // Efectos de scroll
        function initScrollEffects() {
            // Botón "volver arriba"
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            });
            
            backToTop.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // Navegación suave
            document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }

        // Inicializar mapa (placeholder)
        function initMap() {
            // En una implementación real, aquí se inicializaría Google Maps o similar
            console.log('Mapa inicializado (placeholder)');
        }

        // Inicializar botón "volver arriba"
        function initBackToTop() {
            // Ya implementado en initScrollEffects
        }

        // Inicializar newsletter
        function initNewsletter() {
            const newsletterForm = document.querySelector('.newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const email = this.querySelector('input[type="email"]').value;
                    alert(`¡Gracias por suscribirte con el email: ${email}!`);
                    this.reset();
                });
            }
            
            // Formulario de contacto
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                    this.reset();
                });
            }
        }

        // Inicializar pestañas de administración
        function initAdminTabs() {
            const tabs = document.querySelectorAll('.admin-tab');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Quitar clase active de todas las pestañas
                    tabs.forEach(t => t.classList.remove('active'));
                    // Agregar clase active a la pestaña clickeada
                    tab.classList.add('active');
                    
                    const tabName = tab.getAttribute('data-tab');
                    
                    // Ocultar todas las secciones
                    document.getElementById('product-form').style.display = 'none';
                    document.getElementById('edit-products-section').style.display = 'none';
                    document.getElementById('testimonials-section').style.display = 'none';
                    
                    // Mostrar la sección correspondiente
                    if (tabName === 'add') {
                        document.getElementById('product-form').style.display = 'grid';
                    } else if (tabName === 'edit') {
                        document.getElementById('edit-products-section').style.display = 'block';
                        renderEditProductsList();
                    } else if (tabName === 'testimonials') {
                        document.getElementById('testimonials-section').style.display = 'block';
                        renderAdminTestimonials();
                    }
                });
            });
        }

        // Renderizar lista de productos para editar
        function renderEditProductsList() {
            const editProductsList = document.getElementById('edit-products-list');
            editProductsList.innerHTML = '';
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'edit-product-card';
                productCard.setAttribute('data-category', product.category);
                productCard.setAttribute('data-id', product.id);
                
                productCard.innerHTML = `
                    <div class="edit-product-img">
                        ${product.image ? `<img src="${product.image}" alt="${product.title}">` : '<i class="fas fa-tree"></i>'}
                    </div>
                    <div class="edit-product-info">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <div class="edit-product-price">${product.price}</div>
                        <div class="edit-product-actions">
                            <button class="edit-btn" data-id="${product.id}">
                                <i class="fas fa-edit"></i> Editar
                            </button>
                            <button class="delete-btn" data-id="${product.id}">
                                <i class="fas fa-trash"></i> Eliminar
                            </button>
                        </div>
                    </div>
                `;
                
                editProductsList.appendChild(productCard);
            });
            
            // Añadir event listeners a los botones de editar y eliminar
            document.querySelectorAll('.edit-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const productId = parseInt(this.getAttribute('data-id'));
                    loadProductForEditing(productId);
                });
            });
            
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const productId = parseInt(this.getAttribute('data-id'));
                    deleteProduct(productId);
                });
            });
        }

        // Cargar producto para edición
        function loadProductForEditing(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            currentEditingProduct = productId;
            
            // Llenar el formulario con los datos del producto
            document.getElementById('product-name').value = product.title;
            document.getElementById('product-category').value = product.category;
            document.getElementById('product-price').value = product.price;
            document.getElementById('product-description').value = product.description;
            document.getElementById('product-full-description').value = product.fullDescription;
            
            // Mostrar la imagen actual
            const imagePreview = document.getElementById('image-preview');
            if (product.image) {
                imagePreview.innerHTML = `<img src="${product.image}" alt="Vista previa">`;
            } else {
                imagePreview.innerHTML = '<p>Vista previa de la imagen</p>';
            }
            
            // Cambiar a la pestaña de agregar producto
            document.querySelector('.admin-tab[data-tab="add"]').click();
            
            // Cambiar el texto del botón
            const submitButton = document.querySelector('#product-form button[type="submit"]');
            submitButton.textContent = 'Actualizar Producto';
            
            // Scroll al formulario
            document.getElementById('product-form').scrollIntoView({ behavior: 'smooth' });
        }

        // Eliminar producto
        function deleteProduct(productId) {
            if (!confirm('¿Estás seguro de que quieres eliminar este producto? Esta acción no se puede deshacer.')) {
                return;
            }
            
            products = products.filter(p => p.id !== productId);
            saveProducts();
            renderProducts();
            renderEditProductsList();
            
            alert('Producto eliminado correctamente');
        }

        // Renderizar testimonios en panel de administración
        function renderAdminTestimonials() {
            const testimonialsList = document.getElementById('admin-testimonials-list');
            if (!testimonialsList) return;
            
            testimonialsList.innerHTML = '';
            
            testimonials.forEach(testimonial => {
                const stars = getStarRating(testimonial.rating);
                
                const testimonialItem = document.createElement('div');
                testimonialItem.className = 'testimonial-card';
                testimonialItem.innerHTML = `
                    <div class="testimonial-text">"${testimonial.text}"</div>
                    <div class="testimonial-author">
                        <div class="author-avatar">${testimonial.author.charAt(0)}</div>
                        <div class="author-info">
                            <h4>${testimonial.author}</h4>
                            <p>${testimonial.role}</p>
                            <div class="rating">${stars}</div>
                        </div>
                    </div>
                    <div class="edit-product-actions" style="margin-top: 15px;">
                        <button class="edit-btn edit-testimonial" data-id="${testimonial.id}">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button class="delete-btn delete-testimonial" data-id="${testimonial.id}">
                            <i class="fas fa-trash"></i> Eliminar
                        </button>
                    </div>
                `;
                
                testimonialsList.appendChild(testimonialItem);
            });
            
            // Añadir event listeners a los botones de editar y eliminar testimonios
            document.querySelectorAll('.edit-testimonial').forEach(button => {
                button.addEventListener('click', function() {
                    const testimonialId = parseInt(this.getAttribute('data-id'));
                    loadTestimonialForEditing(testimonialId);
                });
            });
            
            document.querySelectorAll('.delete-testimonial').forEach(button => {
                button.addEventListener('click', function() {
                    const testimonialId = parseInt(this.getAttribute('data-id'));
                    deleteTestimonial(testimonialId);
                });
            });
        }

        // Cargar testimonio para edición
        function loadTestimonialForEditing(testimonialId) {
            const testimonial = testimonials.find(t => t.id === testimonialId);
            if (!testimonial) return;
            
            currentEditingTestimonial = testimonialId;
            
            // Llenar el formulario con los datos del testimonio
            document.getElementById('testimonial-text').value = testimonial.text;
            document.getElementById('testimonial-author').value = testimonial.author;
            document.getElementById('testimonial-role').value = testimonial.role;
            document.getElementById('testimonial-rating').value = testimonial.rating;
            
            // Cambiar el texto del botón
            const submitButton = document.querySelector('#testimonial-form button[type="submit"]');
            submitButton.textContent = 'Actualizar Testimonio';
            
            // Scroll al formulario
            document.getElementById('testimonial-form').scrollIntoView({ behavior: 'smooth' });
        }

        // Manejar envío del formulario de testimonios
        function handleTestimonialSubmit() {
            const testimonialData = {
                text: document.getElementById('testimonial-text').value,
                author: document.getElementById('testimonial-author').value,
                role: document.getElementById('testimonial-role').value,
                rating: parseFloat(document.getElementById('testimonial-rating').value)
            };
            
            if (currentEditingTestimonial) {
                // Modo edición - Actualizar testimonio existente
                const index = testimonials.findIndex(t => t.id === currentEditingTestimonial);
                if (index !== -1) {
                    testimonials[index] = {
                        ...testimonials[index],
                        ...testimonialData
                    };
                }
            } else {
                // Modo agregar - Crear nuevo testimonio
                const newTestimonial = {
                    id: testimonials.length > 0 ? Math.max(...testimonials.map(t => t.id)) + 1 : 1,
                    ...testimonialData
                };
                testimonials.push(newTestimonial);
            }
            
            saveTestimonials();
            renderTestimonials();
            renderAdminTestimonials();
            
            // Resetear formulario
            resetTestimonialForm();
            
            // Mostrar mensaje de éxito
            const successMsg = currentEditingTestimonial ? 
                'Testimonio actualizado correctamente!' : 
                'Testimonio agregado correctamente!';
            alert(successMsg);
        }

        // Eliminar testimonio
        function deleteTestimonial(testimonialId) {
            if (!confirm('¿Estás seguro de que quieres eliminar este testimonio? Esta acción no se puede deshacer.')) {
                return;
            }
            
            testimonials = testimonials.filter(t => t.id !== testimonialId);
            saveTestimonials();
            renderTestimonials();
            renderAdminTestimonials();
            
            alert('Testimonio eliminado correctamente');
        }

        // Resetear formulario de testimonio
        function resetTestimonialForm() {
            document.getElementById('testimonial-form').reset();
            const submitButton = document.querySelector('#testimonial-form button[type="submit"]');
            submitButton.textContent = 'Agregar Testimonio';
            currentEditingTestimonial = null;
        }

        // Resetear formulario de producto
        function resetProductForm() {
            document.getElementById('product-form').reset();
            document.getElementById('image-preview').innerHTML = '<p>Vista previa de la imagen</p>';
            const submitButton = document.querySelector('#product-form button[type="submit"]');
            submitButton.textContent = 'Agregar Producto';
            currentEditingProduct = null;
        }

        // Procesar envío del formulario de productos
        function processFormSubmission(imageData) {
            const productData = {
                title: document.getElementById('product-name').value,
                category: document.getElementById('product-category').value,
                price: document.getElementById('product-price').value,
                description: document.getElementById('product-description').value,
                fullDescription: document.getElementById('product-full-description').value,
                image: imageData
            };
            
            if (currentEditingProduct) {
                // Modo edición - Actualizar producto existente
                const index = products.findIndex(p => p.id === currentEditingProduct);
                if (index !== -1) {
                    products[index] = {
                        ...products[index],
                        ...productData
                    };
                }
            } else {
                // Modo agregar - Crear nuevo producto
                const newProduct = {
                    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
                    ...productData
                };
                products.push(newProduct);
            }
            
            saveProducts();
            renderProducts();
            
            // Resetear formulario
            resetProductForm();
            
            // Mostrar mensaje de éxito
            const successMsg = currentEditingProduct ? 
                'Producto actualizado correctamente!' : 
                'Producto agregado correctamente!';
            alert(successMsg);
            
            // Actualizar la lista de edición
            renderEditProductsList();
            
            // Desplazarse a la sección de productos
            document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
        }

        // Inicializar la página
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            renderTestimonials();
            initFilters();
            initModal();
            initLoginSystem();
            initImagePreview();
            checkAuthStatus();
            initAnimations();
            initScrollEffects();
            initMap();
            initBackToTop();
            initNewsletter();
            initAdminTabs();
            
            // Botón cancelar edición
            document.getElementById('cancel-edit').addEventListener('click', resetProductForm);
            document.getElementById('cancel-testimonial').addEventListener('click', resetTestimonialForm);
            
            // Manejar envío del formulario de productos
            productForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (!isAuthenticated) {
                    alert('Debe iniciar sesión para agregar productos');
                    document.getElementById('login-modal').style.display = 'flex';
                    return;
                }
                
                const imageInput = document.getElementById('product-image');
                const imageFile = imageInput.files[0];
                
                // Si estamos editando y no se seleccionó una nueva imagen, usar la existente
                let imageData = null;
                if (currentEditingProduct) {
                    const existingProduct = products.find(p => p.id === currentEditingProduct);
                    imageData = existingProduct.image;
                }
                
                if (!imageFile && !imageData) {
                    alert('Por favor, seleccione una imagen para el producto');
                    // Agitar el campo de imagen
                    imageInput.style.animation = 'shake 0.5s';
                    setTimeout(() => {
                        imageInput.style.animation = '';
                    }, 500);
                    return;
                }
                
                // Si se seleccionó una nueva imagen, procesarla
                if (imageFile) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        processFormSubmission(e.target.result);
                    };
                    
                    reader.readAsDataURL(imageFile);
                } else {
                    processFormSubmission(imageData);
                }
            });
            
            // Manejar envío del formulario de testimonios
            testimonialForm.addEventListener('submit', function(e) {
                e.preventDefault();
                handleTestimonialSubmit();
            });
        });
