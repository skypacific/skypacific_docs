export default {

  clear() {
    var titleContainer = document.querySelector('.sidebar-title')
    titleContainer.innerHTML = ""
    var tocContainer = document.querySelector('.sidebar-links')
    tocContainer.innerHTML = ""
  },

  trim(item) {
    var text = (item.childNodes.length > 1) ? item.childNodes[1].nodeValue.trim() : item.childNodes[0].nodeValue.trim()
    text = document.createTextNode(text)
    return text
  },

  findTitles() {
    var titles = document.querySelectorAll('h2, h3')
    return titles
  },

  showToc(titles) {
    var container = document.querySelector('.sidebar-links')
    titles.forEach(function(item) {
      var text = item.childNodes[1].nodeValue.trim()
      text = document.createTextNode(text)
      var textLink = document.createElement('a')
      textLink.appendChild(text)
      textLink.href = '#' + item.id
      var tocItem = document.createElement('li')
      tocItem.appendChild(textLink)
      if (item.tagName == 'H2') {
        tocItem.classList.add('sidebar-title2')
      } else {
        tocItem.classList.add('sidebar-title3')
      }
      container.appendChild(tocItem)
      item.toToc = tocItem
    })
    return titles
  },

  refreshToc(titles) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    var scrollBottom = scrollTop + document.documentElement.clientHeight
    var pageHeight = document.documentElement.scrollHeight
    titles.forEach(function(item, i) {
      if (scrollTop >= item.offsetTop) {
        item.toToc.classList.add('is-active')
        // Set others to inactive
        titles.forEach(function(item_sub, j) {
          if (j != i) {
            item_sub.toToc.classList.remove('is-active')
          }
        })
        // Set the parent h2 to active
        for (var k = i; k >= 0; k--) {
          if (titles[k].tagName == 'H2') {
            titles[k].toToc.classList.add('is-active')
            break
          }
        }
      }
    })
    if (scrollBottom >= pageHeight) {
      titles.forEach(function(item) {
        item.toToc.classList.remove('is-active')
      })
      var lastItem = titles[titles.length-1]
      lastItem.toToc.classList.add('is-active')

      // Set the parent h2 to active
      for (var k = titles.length-1; k >= 0; k--) {
        if (titles[k].tagName == 'H2') {
          titles[k].toToc.classList.add('is-active')
          break
        }
      }
    }
  },

  toc() {
    var titleContainer = document.querySelector('.sidebar-title')
    var bigTitle = document.querySelector('h1')
    var bigTitleNode = this.trim(bigTitle)
    titleContainer.appendChild(bigTitleNode)

    var titles = this.findTitles()
    titles = this.showToc(titles)

    window.addEventListener('scroll', () => {
      this.refreshToc(titles)
    })
  }
}
