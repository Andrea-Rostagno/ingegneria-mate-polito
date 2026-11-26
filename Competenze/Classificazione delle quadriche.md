---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["classification of quadrics", "quadrica", "quadric surface", "quadriche", "ellissoide", "iperboloide a una falda", "iperboloide a due falde", "paraboloide", "paraboloide ellittico", "paraboloide iperbolico", "cono quadrico", "cilindro quadrico"]
tags: [competenza, area/algebra-geometria]
---

# Classificazione delle quadriche

> Le quadriche sono le superfici di $E_3$ date da equazioni di secondo grado in $x,y,z$. Come per le coniche si classificano con la matrice completa $B$ ($4\times4$) e il blocco quadratico $A$ ($3\times3$), più lo studio delle sezioni piane.

## Definizione / enunciato
A una quadrica si associano
$$B=\begin{bmatrix}a_{11}&a_{12}&a_{13}&b_1\\a_{12}&a_{22}&a_{23}&b_2\\a_{13}&a_{23}&a_{33}&b_3\\b_1&b_2&b_3&c\end{bmatrix}\leftrightarrow\begin{bmatrix}x^2&xy&xz&x\\yx&y^2&yz&y\\zx&zy&z^2&z\\x&y&z&1\end{bmatrix},\qquad A=\text{blocco }3\times3 .$$
Classificazione (p. 37-38 di `14. Analytic Geometry II v3.2.0.pdf`, pagine controllate sull'immagine):
- $|B|\neq0$: **non degenere** (irriducibile); $|B|=0$: **degenere** (riducibile). Nel caso degenere: $\mathrm{rank}B=3$ cono quadrico, $\mathrm{rank}B=2$ coppia di piani, $\mathrm{rank}B=1$ piano doppio.
- $|A|\neq0$: **centrica**; $|A|=0$: non centrica.
- Non degenere e non centrica: **paraboloide** (ellittico o iperbolico).
- Non degenere e centrica: **ellissoide** se i 3 autovalori di $A$ sono concordi, **iperboloide** negli altri casi.
- Se dopo il completamento dei quadrati una variabile resta assente: **cilindro quadrico** (una conica letta nello spazio).

**Versione di Notari** (`quadriche-slides.pdf`, Teor. 2, 4, 5, 8), più completa:
- per cambi di coordinate $X=PX'+b$ con $P$ ortogonale speciale sono invarianti $\det B$ e il polinomio caratteristico di $A$;
- in base al rango di $B$: rango 4 quadrica *liscia* (ellissoide, iperboloide, paraboloide); rango 3 quadrica *singolare* (cono o cilindro); rango 2 coppia di piani; rango 1 piano doppio;
- quadriche lisce:
  - ellissoide reale se $A$ è definita in segno e $\det B<0$, immaginario se $\det B>0$;
  - paraboloide se $0$ è autovalore di $A$;
  - iperboloide se $A$ non è definita in segno e $0$ non è autovalore; a punti ellittici se $\det B<0$, iperbolici se $\det B>0$;
- quadriche singolari:
  - cono se $0$ non è autovalore di $A$;
  - cilindro se lo è: ellittico se i due autovalori restanti sono concordi, iperbolico se sono discordi, parabolico se $0$ è doppio;
- centro di simmetria (ellissoidi, iperboloidi, coni): l'unica soluzione di $AX=-{}^t(a_{14},a_{24},a_{34})$.

Qui Mercadante semplifica ("$\mathrm{rank}B=3$: cono quadrico", ammettendo che la situazione è più articolata).

## Formule chiave
- Ellissoide: $3x^2+4y^2+5z^2-9=0$.
- Iperboloide a una falda: le sezioni $z=k$ sono ellissi per ogni $k$.
- Iperboloide a due falde: le sezioni sono ellissi reali solo per $|k|$ grande.
- Cono: equazione omogenea di grado 2.

## Intuizione
Gli autovalori di $A$ dicono come la superficie si comporta all'infinito: tutti concordi significa chiusa (ellissoide), segni misti significa aperta (iperboloide). Per distinguere una o due falde e il tipo di paraboloide si "affetta" la superficie con piani coordinati e si riconoscono le coniche sezione.

## Come si usa
Esempi (p. 39-42):
- $3x^2+4y^2-5z^2-9=0$, cioè $3x^2+4y^2=5z^2+9$: le sezioni $z=k$ sono sempre ellissi, la più piccola per $k=0$. È un **iperboloide a una falda** (iperbolico).
- $3x^2-4y^2+5z^2+9=0$: le sezioni $y=k$ sono reali solo per $4k^2-9>0$. È un **iperboloide a due falde** (ellittico).
- $x^2+2y^2+4z=0$: nessuna variabile libera (non è un cilindro), non omogenea (non è un cono). Sezioni parabole ed ellissi: **paraboloide ellittico**.
- $x^2-y^2=3$: manca la $z$, quindi è un **cilindro** iperbolico.
- $x^2+y^2-2z^2=0$: omogenea di grado 2, quindi è un **cono**.

## Nei corsi
- **Algebra lineare** (triennale): solo "brevissimi cenni" e "ricette" secondo le slide di S. Mercadante; le slide di R. Notari danno la classificazione completa per invarianti e la ricerca di centro e vertice. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/14. Analytic Geometry II v3.2.0.pdf` (p. 36-42); `Appunti, riassunti e formulari/quadriche-slides.pdf` (R. Notari); `Appunti, riassunti e formulari/coniche.pdf` (esercizi su coniche e quadriche).

## Prerequisiti
- [[Classificazione delle coniche]]: stessa teoria in tre variabili
- [[Forma quadratica]]: idem in tre variabili

## Porta a
- [[Sfera]]: ellissoide con i tre semiassi uguali
- [[Coni, cilindri e superfici di rotazione]]: coni e cilindri quadrici come casi particolari

## Collegati
- [[Segnatura di una forma quadratica]]: i segni degli autovalori distinguono ellissoidi, iperboloidi e paraboloidi
