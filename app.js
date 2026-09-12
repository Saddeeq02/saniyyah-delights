/**
 * Saniyyah's Delights — Official Artisanal Confections Web App
 * Brand: Saniyyah's Delights (@saniy_yahhh, Kano, Nigeria)
 * Contact: +234 808 145 4682
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Product Catalog Data ---
  const treatsCatalog = [
    {
      id: 'gullisuwa',
      name: 'Hot Crispy Gullisuwa',
      hausaName: 'Gullisuwa Madara',
      category: 'milk-sweets',
      badge: 'Best Seller 🔥',
      tag: 'Customer Favorite 🤤',
      image: 'assets/images/gullisuwa.jpg',
      gallery: [
        'assets/images/gullisuwa.jpg',
        'assets/images/gullisuwa_box.jpg',
        'assets/images/gullisuwa_tray.jpg',
        'assets/images/gullisuwa_macro.jpg'
      ],
      description: 'Iconic Northern Nigerian sweet fried milk balls made with whole cream powdered milk and pure sugar, fried to a golden crispy crust with a soft milky center. Shown in gourmet ceramic bowl, luxury gift box, and fresh chef\'s tray.',
      specs: ['100% Whole Milk', 'Golden Crispy Crust', 'Fresh Daily Batch'],
      popular: true
    },
    {
      id: 'alawar_madara',
      name: 'Traditional Alawar Madara (Milk Fudge)',
      hausaName: 'Alawar Madara na Musamman',
      category: 'milk-sweets',
      badge: 'Royal Heritage ✨',
      tag: 'Signature Treat ✨',
      image: 'assets/images/alawar_madara.jpg',
      gallery: [
        'assets/images/alewar_madara.jpg',
        'assets/images/alewar_madara_shapes.jpg',
        'assets/images/alewar_madara_classic.jpg'
      ],
      description: 'Luxurious Northern Nigerian milk candy fudge handcrafted from rich whole milk and pure sweetness. Shown in traditional embossed floral relief patterns, celebration hearts & stars, and classic golden fudge squares.',
      specs: ['Embossed Floral Motifs', 'Party Shapes & Cubes', '100% Whole Milk'],
      popular: true
    },
    {
      id: 'iloka',
      name: 'Golden Iloka (Traditional Caramel Toffee)',
      hausaName: 'Iloka Mai Daɗi',
      category: 'milk-sweets',
      badge: 'Northern Classic 🍯',
      tag: 'Sweet Cravings 🍬',
      image: 'assets/images/iloka.jpg',
      gallery: [
        'assets/images/iloka.jpg',
        'assets/images/iloka_pack.jpg',
        'assets/images/iloka_bowl.jpg',
        'assets/images/iloka_mound.jpg',
        'assets/images/iloka_side.jpg'
      ],
      description: 'Northern Nigeria\'s beloved chewy caramel milk toffee. Slow-cooked to glossy perfection with rich buttery notes and an irresistible melt-in-the-mouth chew. Shown in artisanal woven basket, share containers, and serving bowls.',
      specs: ['Glossy Caramel Chew', 'Slow Cooked Milk', 'Artisanal Recipe'],
      popular: true
    },
    {
      id: 'albishir',
      name: 'Royal Albishir (Delicate Milk Flakes)',
      hausaName: 'Albishir na Madara',
      category: 'milk-sweets',
      badge: 'Hausa Specialty 🥛',
      tag: 'Crispy Milk Flakes 🥛',
      image: 'assets/images/albishir.jpg',
      gallery: [
        'assets/images/albishir.jpg',
        'assets/images/albishir_bucket.jpg'
      ],
      description: 'Traditional Northern Nigerian crispy powdered milk sheets and delicate flakes, melted-and-fried to paper-thin sweetness. Served in gourmet black bowls and 1-liter share buckets.',
      specs: ['Paper-Thin Milk Sheets', '100% Cream Powdered Milk', 'Party Buckets & Bowls'],
      popular: true
    },
    {
      id: 'halakar_kobo',
      name: 'Crunchy Halakar Kobo (Groundnut Brittle)',
      hausaName: 'Halakar Kobo mai Zuma',
      category: 'milk-sweets',
      badge: 'Nutty Crunch 🥜',
      tag: 'Traditional Brittle 🥜',
      image: 'assets/images/halakar_kobo.jpg',
      gallery: [
        'assets/images/halakar_kobo.jpg',
        'assets/images/halakar_kobo_close.jpg'
      ],
      description: 'Authentic Hausa roasted peanut candy brittle slow-cooked in caramelized honey sugar and cut into crispy golden squares and diamonds for an addictively crunchy bite.',
      specs: ['Roasted Groundnuts', 'Caramelized Honey Glaze', 'Crispy Golden Squares'],
      popular: true
    },
    {
      id: 'gireba',
      name: 'Traditional Gireba Cookies',
      hausaName: 'Gireba na Musamman',
      category: 'pastries',
      badge: 'Artisanal Bake 🍪',
      tag: 'Melt-in-Mouth 🍪',
      image: 'assets/images/gireba.jpg',
      gallery: [
        'assets/images/gireba.jpg',
        'assets/images/gireba_plate.jpg',
        'assets/images/gireba_crumb.jpg',
        'assets/images/gireba_jar.jpg'
      ],
      description: 'Authentic Hausa-style melt-in-the-mouth shortbread cookies, delicately spiced with cardamom and vanilla, crowned with toasted sesame seeds. Shown in scalloped porcelain serving dish, gourmet tea spread, warm crumbly texture showcase, and glass canister jar.',
      specs: ['Crumbly Melt-in-Mouth', 'Toasted Sesame Tops', 'Cardamom & Vanilla'],
      popular: true
    },
    {
      id: 'alkaki',
      name: 'Honey Glazed Alkaki',
      hausaName: 'Alkaki Mai Zuma da Ridi',
      category: 'pastries',
      badge: 'Wedding Classic 🍯',
      tag: 'Authentic Confection 🍯',
      image: 'assets/images/alkaki.jpg',
      gallery: [
        'assets/images/alkaki.jpg',
        'assets/images/alkaki_hand.jpg',
        'assets/images/alkaki_platter.jpg',
        'assets/images/alkaki_macro.jpg'
      ],
      description: 'Traditional Hausa confections fried to a golden crunch, steeped in rich spiced honey syrup, and crowned with toasted sesame seeds. Shown in celebration serving plate, individual crunchy knot presentation, catering platter, and honey-drizzled macro close-up.',
      specs: ['Pure Honey Glaze', 'Toasted Sesame Seeds', 'Golden & Crispy Crunch'],
      popular: true
    },
    {
      id: 'assorted_platter',
      name: 'Royal Assorted Delight Box',
      hausaName: 'Akwatin Zaɓi na Musamman',
      category: 'milk-sweets',
      badge: 'Gift Special 🎁',
      tag: 'Gift Special 🎁',
      image: 'assets/images/hero_treats.jpg',
      description: 'The ultimate tasting box featuring a generous combination of Gullisuwa, Gireba, Alawar Madara, and glazed Alkaki in a luxury ribbon-tied presentation box.',
      specs: ['All-in-One Selection', 'Luxury Packaging', 'Best for Gifting'],
      popular: true
    }
  ];

  // --- 2. Cart State & Storage ---
  let cart = JSON.parse(localStorage.getItem('saniyyah_cart')) || [];

  function saveCart() {
    localStorage.setItem('saniyyah_cart', JSON.stringify(cart));
    updateCartUI();
  }

  // --- 3. DOM Elements ---
  const treatsGrid = document.getElementById('treatsGrid');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartDrawerBtn = document.getElementById('cartDrawerBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartCountBadge = document.getElementById('cartCountBadge');
  const drawerItemsCount = document.getElementById('drawerItemsCount');
  const cartTotalPrice = document.getElementById('cartTotalPrice');
  const checkoutWhatsAppBtn = document.getElementById('checkoutWhatsAppBtn');
  const cartCustomerName = document.getElementById('cartCustomerName');
  const cartDeliveryLoc = document.getElementById('cartDeliveryLoc');
  const cartEventNote = document.getElementById('cartEventNote');
  const headerWhatsAppOrderBtn = document.getElementById('headerWhatsAppOrderBtn');

  // Quick Treat Modal
  const treatQuickModal = document.getElementById('treatQuickModal');
  const closeQuickModal = document.getElementById('closeQuickModal');
  const quickModalContent = document.getElementById('quickModalContent');

  // Mobile Nav
  const menuToggle = document.getElementById('menuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Filter Tabs
  const filterTabs = document.querySelectorAll('.tab-btn');

  // Quick Inquiry Form
  const quickInquiryForm = document.getElementById('quickInquiryForm');

  // --- 4. Render Menu Catalog ---
  function renderTreats(filter = 'all') {
    if (!treatsGrid) return;

    const filtered = filter === 'all'
      ? treatsCatalog
      : treatsCatalog.filter(item => item.category === filter);

    treatsGrid.innerHTML = filtered.map(treat => {
      const hasGallery = treat.gallery && treat.gallery.length > 1;
      const gallerySwitcher = hasGallery ? `
        <div class="card-dots-wrap">
          <div class="card-photo-switcher">
            ${treat.gallery.map((img, idx) => `
              <button class="card-dot ${idx === 0 ? 'active' : ''}" 
                      onclick="event.stopPropagation(); window.switchCardImage('${treat.id}', ${idx})" 
                      aria-label="View photo ${idx + 1} for ${treat.name}">
              </button>
            `).join('')}
          </div>
          <span class="card-photo-count" id="count-${treat.id}">1/${treat.gallery.length} Photos</span>
        </div>
      ` : '';

      return `
        <article class="treat-card" data-id="${treat.id}">
          <div class="card-media" id="media-${treat.id}">
            <img src="${treat.image}" alt="${treat.name}" class="card-img" id="img-${treat.id}" loading="lazy" width="400" height="300">
            <span class="card-tag">${treat.tag}</span>
            ${gallerySwitcher}
          </div>
          <div class="card-body">
            <div class="card-title-row">
              <h3 class="treat-title">${treat.name}</h3>
              <span class="treat-badge">${treat.badge || 'Fresh Batch'}</span>
            </div>
            <p class="treat-description">${treat.description}</p>
            <div class="card-specs">
              ${treat.specs.map(spec => `<span class="spec-chip">${spec}</span>`).join('')}
            </div>
            <div class="card-actions">
              <button class="btn btn-add-tray" data-id="${treat.id}">
                <span>+ Add to Tray</span>
              </button>
              <button class="btn-quick-view" data-id="${treat.id}" aria-label="Quick preview of ${treat.name}">
                👁️ Details
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click events
    document.querySelectorAll('.btn-add-tray').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        addToCart(id, e.currentTarget);
      });
    });

    document.querySelectorAll('.btn-quick-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openQuickView(id);
      });
    });
  }

  // --- In-Card Photo Carousel & 20s Auto-Slider Engine ---
  const cardCurrentPhotoIndex = {};
  const cardSlideTimers = {};

  window.switchCardImage = function (productId, index, isManual = true) {
    const treat = treatsCatalog.find(t => t.id === productId);
    if (!treat || !treat.gallery || !treat.gallery[index]) return;

    cardCurrentPhotoIndex[productId] = index;

    const imgEl = document.getElementById(`img-${productId}`);
    if (imgEl) {
      imgEl.style.opacity = '0.35';
      imgEl.style.transform = 'scale(0.97)';
      setTimeout(() => {
        imgEl.src = treat.gallery[index];
        imgEl.style.opacity = '1';
        imgEl.style.transform = 'scale(1)';
      }, 160);
    }

    const mediaEl = document.getElementById(`media-${productId}`);
    if (mediaEl) {
      mediaEl.querySelectorAll('.card-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
      });
      const countEl = document.getElementById(`count-${productId}`);
      if (countEl) {
        countEl.textContent = `${index + 1}/${treat.gallery.length} Photos`;
      }
    }

    // Reset the 20-second interval if manually clicked
    if (isManual) {
      scheduleAutoSlide(productId);
    }
  };

  function scheduleAutoSlide(productId) {
    if (cardSlideTimers[productId]) {
      clearInterval(cardSlideTimers[productId]);
    }

    const treat = treatsCatalog.find(t => t.id === productId);
    if (!treat || !treat.gallery || treat.gallery.length <= 1) return;

    cardSlideTimers[productId] = setInterval(() => {
      // Pause sliding if user is hovering over card
      const cardEl = document.querySelector(`.treat-card[data-id="${productId}"]`);
      if (cardEl && cardEl.matches(':hover')) return;

      const current = cardCurrentPhotoIndex[productId] || 0;
      const nextIdx = (current + 1) % treat.gallery.length;
      window.switchCardImage(productId, nextIdx, false);
    }, 20000); // 20 seconds interval
  }

  function initAutoSliders() {
    treatsCatalog.forEach(treat => {
      if (treat.gallery && treat.gallery.length > 1) {
        cardCurrentPhotoIndex[treat.id] = 0;
        scheduleAutoSlide(treat.id);
      }
    });
  }

  // --- Toast Notification Engine (Non-Blocking UX) ---
  function showToastNotification(productName, totalItems) {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-icon">✨</span>
        <div class="toast-text-wrap">
          <strong>Added to Order Tray!</strong>
          <small>${productName}</small>
        </div>
      </div>
      <button class="toast-action-btn" onclick="window.openCartDrawer()">
        View Tray (${totalItems}) →
      </button>
    `;

    toastContainer.appendChild(toast);

    // Smooth animation in
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3000);
  }

  // --- 5. Cart Logic ---
  function addToCart(productId, targetBtn = null) {
    const product = treatsCatalog.find(p => p.id === productId);
    if (!product) return;

    let currentQty = 1;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
      currentQty = existing.quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        quantity: 1
      });
    }

    saveCart();

    // Visual button feedback on the card (DO NOT open drawer!)
    if (targetBtn) {
      const originalText = targetBtn.innerHTML;
      targetBtn.classList.add('btn-added-state');
      targetBtn.innerHTML = `<span>✓ Added (${currentQty})</span>`;
      setTimeout(() => {
        targetBtn.classList.remove('btn-added-state');
        targetBtn.innerHTML = `<span>+ Add More (${currentQty})</span>`;
      }, 1500);
    }

    // Trigger subtle floating toast notification
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    showToastNotification(product.name, totalItems);

    // Pulse animation on header cart button
    if (cartDrawerBtn) {
      cartDrawerBtn.classList.add('badge-bounce');
      setTimeout(() => cartDrawerBtn.classList.remove('badge-bounce'), 600);
    }
  }

  function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
    saveCart();
  }

  function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
  }

  function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCountBadge) cartCountBadge.textContent = totalItems;
    if (drawerItemsCount) drawerItemsCount.textContent = `${totalItems} items`;
    if (cartTotalPrice) cartTotalPrice.style.display = 'none';

    // Mobile Sticky Cart Bar update
    const mobileStickyCartBar = document.getElementById('mobileStickyCartBar');
    const stickyCartText = document.getElementById('stickyCartText');
    if (mobileStickyCartBar && stickyCartText) {
      if (totalItems > 0) {
        stickyCartText.textContent = `Order Tray (${totalItems} item${totalItems > 1 ? 's' : ''})`;
        mobileStickyCartBar.style.display = 'flex';
      } else {
        mobileStickyCartBar.style.display = 'none';
      }
    }

    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="empty-cart-state">
          <div class="empty-icon">🍬</div>
          <p>Your treat tray is empty!</p>
          <small>Add delicious Gullisuwa, Gireba, or Alawar Madara from the menu.</small>
        </div>
      `;
    } else {
      cartItemsList.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <small class="cart-item-note">Fresh batch • Made to order</small>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="window.changeCartQty('${item.id}', -1)" aria-label="Decrease quantity">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="window.changeCartQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="window.removeCartItem('${item.id}')" aria-label="Remove item">&times;</button>
        </div>
      `).join('');
    }
  }

  window.changeCartQty = changeQty;
  window.removeCartItem = removeFromCart;
  window.openCartDrawer = openCart;

  function openCart() {
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (cartDrawerBtn) cartDrawerBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Sticky Mobile Cart Bar click handler
  const stickyOpenCartBtn = document.getElementById('stickyOpenCartBtn');
  if (stickyOpenCartBtn) stickyOpenCartBtn.addEventListener('click', openCart);

  // --- Universal WhatsApp Dispatch Helper ---
  function openWhatsAppChat(message) {
    const phone = '2348081454682';
    const encodedText = encodeURIComponent(message);
    const apiUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;

    // Reliable mobile vs desktop WhatsApp dispatch
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // Direct navigation on mobile launches native WhatsApp app with prefilled text
      window.location.href = apiUrl;
    } else {
      // Desktop opens WhatsApp Web or desktop app in a new tab
      const newWin = window.open(apiUrl, '_blank');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        window.location.href = apiUrl;
      }
    }
  }

  // --- 6. Checkout via WhatsApp ---
  function buildOrderMessage(name = '', location = '', notes = '') {
    const cleanName = name.trim() || 'Valued Customer';
    const cleanLoc = location.trim() || 'Local / National / International (To be confirmed)';
    const cleanNotes = notes.trim() || 'Standard Delivery / Fresh Batch';

    let message = `*🛍️ NEW ORDER — SANIYYAH'S DELIGHTS*\n`;
    message += `------------------------------------\n`;
    message += `👤 *Customer Name:* ${cleanName}\n`;
    message += `📍 *Delivery Location / Destination:* ${cleanLoc}\n`;
    message += `📝 *Notes / Event Date:* ${cleanNotes}\n`;
    message += `------------------------------------\n`;
    message += `*📦 SELECTED TREATS:*\n`;

    let totalQty = 0;
    cart.forEach((item, index) => {
      totalQty += item.quantity;
      message += `${index + 1}. *${item.name}* (Quantity: ${item.quantity})\n`;
    });

    message += `------------------------------------\n`;
    message += `*Total Packs/Items:* ${totalQty}\n\n`;
    message += `Salam Saniyyah! 🌸 I would like to place an order for the treats selected above. Please let me know the total price and delivery/shipping rates. Thank you!`;

    return message;
  }

  if (checkoutWhatsAppBtn) {
    checkoutWhatsAppBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your order tray is empty! Please select some treats first.');
        return;
      }

      const name = cartCustomerName ? cartCustomerName.value : '';
      const location = cartDeliveryLoc ? cartDeliveryLoc.value : '';
      const notes = cartEventNote ? cartEventNote.value : '';

      const message = buildOrderMessage(name, location, notes);
      openWhatsAppChat(message);
    });
  }

  // --- Header WhatsApp Order Button ---
  if (headerWhatsAppOrderBtn) {
    headerWhatsAppOrderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cart.length > 0) {
        // If customer already has treats selected, open tray to review and checkout
        openCart();
      } else {
        // Direct WhatsApp general inquiry
        const defaultMsg = `Salam Saniyyah! 🌸 I would like to inquire about ordering your delicious fresh treats (Local, Nationwide, or International delivery).`;
        openWhatsAppChat(defaultMsg);
      }
    });
  }

  // --- 7. Quick Inquiry Form ---
  if (quickInquiryForm) {
    quickInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('customerName').value.trim();
      const area = document.getElementById('deliveryArea').value;
      const treats = document.getElementById('desiredTreats').value.trim();

      let msg = `*⚡ ORDER INQUIRY — SANIYYAH'S DELIGHTS*\n`;
      msg += `------------------------------------\n`;
      msg += `👤 *Customer Name:* ${name || 'Valued Customer'}\n`;
      msg += `📍 *Delivery Location / Country:* ${area || 'Local / Nationwide / International'}\n`;
      msg += `------------------------------------\n`;

      if (cart.length > 0) {
        msg += `*📦 TRAY TREATS:*\n`;
        cart.forEach((item, index) => {
          msg += `${index + 1}. *${item.name}* (Quantity: ${item.quantity})\n`;
        });
        if (treats) {
          msg += `\n*✨ Additional Requests / Craving:* ${treats}\n`;
        }
      } else {
        msg += `*✨ Requested Treats:* ${treats || 'General inquiry about fresh treats'}\n`;
      }

      msg += `------------------------------------\n\n`;
      msg += `Salam Saniyyah! 🌸 Please let me know the total price and delivery/shipping details. Thank you!`;

      openWhatsAppChat(msg);
    });
  }

  // --- 8. Quick View Modal ---
  function openQuickView(productId) {
    const product = treatsCatalog.find(p => p.id === productId);
    if (!product || !quickModalContent) return;

    const hasGallery = product.gallery && product.gallery.length > 1;
    const galleryHtml = hasGallery ? `
      <div class="qm-gallery-row">
        ${product.gallery.map((img, idx) => `
          <button class="qm-thumb-btn ${idx === 0 ? 'active' : ''}" data-src="${img}" aria-label="View photo ${idx + 1}">
            <img src="${img}" alt="Thumbnail ${idx + 1}">
          </button>
        `).join('')}
      </div>
    ` : '';

    quickModalContent.innerHTML = `
      <div class="qm-media-wrap">
        <img src="${product.image}" alt="${product.name}" class="qm-img" id="qmMainImg">
        ${galleryHtml}
      </div>
      <div class="qm-details">
        <span class="sub-pill">${product.tag}</span>
        <h3>${product.name}</h3>
        <p class="qm-inquiry-tag">✨ Made Fresh to Order • Custom Inquiries Welcome</p>
        <p class="qm-desc">${product.description}</p>
        <div class="card-specs mb-3">
          ${product.specs.map(s => `<span class="spec-chip">${s}</span>`).join('')}
        </div>
        <button class="btn btn-primary w-full" id="qmAddBtn" data-id="${product.id}">
          + Add to Order Tray
        </button>
      </div>
    `;

    // Hook up gallery switcher if present
    if (hasGallery) {
      const mainImg = document.getElementById('qmMainImg');
      document.querySelectorAll('.qm-thumb-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          document.querySelectorAll('.qm-thumb-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const newSrc = btn.getAttribute('data-src');
          if (mainImg) mainImg.src = newSrc;
        });
      });
    }

    treatQuickModal.classList.add('open');
    treatQuickModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    document.getElementById('qmAddBtn').addEventListener('click', () => {
      addToCart(product.id);
      closeQuickView();
    });
  }

  function closeQuickView() {
    treatQuickModal.classList.remove('open');
    treatQuickModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeQuickModal) closeQuickModal.addEventListener('click', closeQuickView);
  if (treatQuickModal) {
    treatQuickModal.addEventListener('click', (e) => {
      if (e.target === treatQuickModal) closeQuickView();
    });
  }

  // --- 9. Category Filter Tabs ---
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const cat = tab.getAttribute('data-category');
      renderTreats(cat);
      initAutoSliders();
    });
  });

  // --- 10. Mobile Navigation Drawer ---
  if (menuToggle && mobileNavDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  if (closeMobileNavBtn && mobileNavDrawer) {
    closeMobileNavBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // --- Initial Render ---
  renderTreats('all');
  initAutoSliders();
  updateCartUI();

  console.log("✨ Saniyyah's Delights Official Web App Initialized Successfully!");
});
