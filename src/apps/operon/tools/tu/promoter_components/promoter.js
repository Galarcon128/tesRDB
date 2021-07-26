export default function DrawPromoter({
    id,
    canva,
    heigth,
    arrowSize,
    posX,
    posY,
    strand = "forward",
    stroke = { color: "#000", "width": 2, "linecap": "round" }
  }) {
    if (!canva ) {
      return null;
    }
   // console.log(heigth)

    // draw body
    //const body = canva.path("M 0 0 V " + -heigth + " H " + arrowSize + " V");
    const lup = canva.line(posX, posY, posX, posY+heigth).stroke(stroke)
    const line = canva.line(posX, posY, posX+arrowSize, posY).stroke(stroke)
    //atributos de arrow
    let ax = posX + arrowSize
    let ay = posY - 5
    // draw arrow
    const arrow = canva.path("m 0,0 5,5 -5,5 v 0");
    arrow.fill("none").move(ax, ay);
    arrow.stroke(stroke);
    //group
    var group = canva.group();
    group.add(lup);
    group.add(line);

    group.add(arrow);
  
    // reverse effect

    if (strand === "reverse") {
      group.transform({
        rotate: 180,
      });
      group.move(ax+5,-40)
    }

    // group.add(text);
    // Toltip
    group.attr({
      "data-tip": "",
      "data-for": `${canva.node?.id}-${id}`
    });
    return {
      id: id,
      canva: canva,
      draw: group,
      posX: posX,
      posY: posY,
      objectType: "promoter",
    };
  }