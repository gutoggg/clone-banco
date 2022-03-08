(() => {

  const doubtText = [
    [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat blandit velit, sit amet faucibus lorem. Etiam tristique rhoncus risus, vitae vehicula nunc. Sed lectus enim, rhoncus id neque vel, venenatis vehicula nisl. Phasellus vulputate elit et lorem vestibulum, ut condimentum ante facilisis. In faucibus pretium vestibulum. Mauris pulvinar gravida nibh, ac sollicitudin ipsum tempus sed. Fusce placerat nibh turpis, id facilisis est ultrices sit amet. Praesent neque enim, fringilla a eros vitae, tempor cursus quam. Mauris ac nunc at orci facilisis aliquet vitae in lacus. Vivamus at lectus dolor. Nam placerat ipsum sed orci vulputate, at condimentum nunc fermentum. Nunc ac felis pellentesque, fermentum justo eget, tristique felis. Pellentesque efficitur urna vel interdum malesuada. In non felis eu justo mollis consequat suscipit viverra sapien. Fusce euismod nunc ut justo consectetur, et ultricies enim placerat."
    ],
    [
      "Donec eu eros justo. Praesent in mi vel ligula sagittis hendrerit. Nulla facilisi. Vestibulum dictum ac tellus quis convallis. Nullam consectetur lorem eget ullamcorper condimentum. Nam a euismod arcu, et malesuada purus. Nunc sed aliquam augue. Proin sit amet maximus arcu. Maecenas dignissim sapien eget auctor maximus. Praesent tempor consequat est eget mattis. Donec eget orci felis. Proin maximus tincidunt lacus, quis scelerisque enim pretium nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus interdum venenatis imperdiet."
    ],
    [
      "Etiam tempus viverra tellus vestibulum imperdiet. Donec aliquet nisl vel odio dictum, nec scelerisque odio gravida. Ut lectus purus, interdum eu tortor vel, euismod blandit ante. Pellentesque congue a massa viverra ullamcorper. Sed bibendum efficitur dignissim. Morbi finibus erat non feugiat maximus. Nullam scelerisque diam ac ultrices consectetur. Nunc ac mollis dolor, in ultricies odio. Morbi sit amet tortor magna. Sed varius neque non pharetra luctus. Sed eget massa risus. Proin tristique mi quam, et convallis diam sodales a. Vestibulum quis laoreet elit. Nulla in iaculis mi, a sodales justo. Curabitur gravida dapibus libero, sit amet euismod enim."
    ]
  ]

  const doubtArray = [document.querySelector('[data-doubt-1]'), document.querySelector('[data-doubt-2]'), document.querySelector('[data-doubt-3]')]

  function handleDoubstState(element, doubtNumber) {
    if (element.querySelector('[data-arrow]').classList.contains("select-arrow-rotate")) {
      element.querySelector('[data-arrow]').classList.remove("select-arrow-rotate");
      element.nextElementSibling.innerHTML = " "
    } else {
      for (let i = 0; i < 3; i++) {
        doubtArray[i].querySelector('[data-arrow]').classList.remove("select-arrow-rotate");
        doubtArray[i].nextElementSibling.innerHTML = " "
      }
      element.querySelector('[data-arrow]').classList.add("select-arrow-rotate");
      for (let j = 0; j < doubtText[doubtNumber].length; j++) {
        const newP = document.createElement('p')
        newP.innerHTML = doubtText[doubtNumber][j]
        element.nextElementSibling.appendChild(newP)
      }
    }
  }

  function onDoubtClick(event) {
    switch(event.target) {
      case doubtArray[0]:
        handleDoubstState(doubtArray[0], 0)
        break
      case doubtArray[1]:
        handleDoubstState(doubtArray[1], 1)
        break
      case doubtArray[2]:
        handleDoubstState(doubtArray[2], 2)
        break
    }
  }

  document.addEventListener('click', onDoubtClick)

})()