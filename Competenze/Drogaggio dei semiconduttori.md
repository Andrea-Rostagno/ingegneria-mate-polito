---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["doping", "semiconduttore di tipo n", "n-type", "semiconduttore di tipo p", "p-type", "donori", "accettori"]
tags: [competenza, area/fisica]
---

# Drogaggio dei semiconduttori

> Sostituendo alcuni atomi del semiconduttore con atomi che hanno un elettrone in più (donori, tipo n) o in meno (accettori, tipo p) si fissa in modo controllato la densità di elettroni o di lacune, e quindi la conducibilità.

## Definizione / enunciato
Nel silicio il fosforo (5 elettroni esterni) introduce un elettrone in più; il boro (3 elettroni esterni) introduce una lacuna. Il quinto elettrone del P sente la carica positiva del suo nucleo come in un atomo idrogenoide immerso nel silicio. Lo schermo della costante dielettrica $\varepsilon_r$ riduce l'energia di legame a pochi centesimi di eV: il livello occupato del donore sta appena sotto la banda di conduzione. Per il B il livello è vuoto e sta appena sopra la banda di valenza. Quindi a temperatura ambiente tutti gli elettroni in eccesso del P sono in BC e tutte le lacune del B sono in BV. Se la concentrazione di droganti supera quella intrinseca ($10^9$ cm⁻³ nel Si), la conducibilità è dominata dai portatori del drogante.

## Formule chiave
$$E_1=-\frac{me^4}{2(4\pi\varepsilon_0)^2\hbar^2}=-13.7eV\qquad\text{(valore scritto nella slide)}$$
$$E_1=-\frac{me^4}{2(4\pi\varepsilon_0\varepsilon_r)^2\hbar^2}=-0.05eV\qquad(\varepsilon_r=16)$$
$$\sigma=N_{e,d}\mu_ee+N_{h,a}\mu_he;\qquad \text{tipo n: }\sigma\approx N_{e,d}\mu_ee,\qquad \text{tipo p: }\sigma\approx N_{h,a}\mu_he$$
con $N_{e,d}$ densità di atomi donori e $N_{h,a}$ densità di atomi accettori.

## Intuizione
L'energia di legame idrogenoide scala come $1/\varepsilon_r^2$: con $\varepsilon_r=16$ scende di oltre due ordini di grandezza, e l'agitazione termica basta a liberare l'elettrone. Il segno meno indica la distanza energetica dal livello di elettrone libero, cioè dal fondo della banda di conduzione.

## Come si usa
In un semiconduttore drogato n la densità di elettroni di conduzione resta circa costante attorno alla temperatura ambiente e pari alla concentrazione di droganti; ad alte $T$ torna a prevalere l'eccitazione termica dalla BV alla BC (comportamento intrinseco). Così i semiconduttori coprono tutte le conducibilità, da quelle degli isolanti a quelle dei metalli.

## Nei corsi
- **Fisica 2** (triennale): lezioni 71-72, "Drogaggio dei semiconduttori" (figure con P e B nel Si). Il valore $-13.7$ eV è riportato come scritto nella slide p. 17 (possibile refuso, da verificare sul PDF). Fonti: `triennale/ANNO 2/fisica 2/lezioni/71&72.LEZIONE.pdf` (pp. 13-21).

## Prerequisiti
- [[Semiconduttore intrinseco]]: si aggiungono portatori al materiale puro
- [[Atomo di idrogeno]]: il donore è un atomo idrogenoide schermato da εr

## Porta a
- [[Giunzione tra semiconduttori]]: materiali con livelli di Fermi diversi

## Collegati
- Nessuno.
