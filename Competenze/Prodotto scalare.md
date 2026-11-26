---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Fisica 1, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["scalar product", "dot product", "inner product", "prodotto scalare euclideo", "moltiplicazione scalare", "angolo tra due vettori", "ortogonalità tra vettori", "modulo di un vettore"]
tags: [competenza, area/algebra-geometria]
---

# Prodotto scalare

> Operazione che associa a due vettori uno scalare, $\langle\vec u,\vec v\rangle=\|\vec u\|\|\vec v\|\cos\theta$: misura lunghezze, angoli e ortogonalità.

## Definizione / enunciato
Geometricamente, per vettori applicati nello stesso punto, $\langle\vec u,\vec v\rangle=\|\vec u\|\,\|\vec v\|\cos\theta$, con $\theta$ angolo convesso tra i due. In componenti (riferimento ortonormale, o $\mathbb R^3$ con il prodotto euclideo):
$$\langle x,y\rangle=x^1y^1+x^2y^2+x^3y^3=\sum_{i=1}^3 x^iy^i .$$
È una **forma bilineare simmetrica non degenere definita positiva**:
- bilineare: $\langle\lambda x+\mu y,z\rangle=\lambda\langle x,z\rangle+\mu\langle y,z\rangle$ (e analogamente nel secondo argomento);
- simmetrica: $\langle x,y\rangle=\langle y,x\rangle$;
- definita positiva: $\langle x,x\rangle\ge 0$, con $=0\iff x=0$.

**Ortogonalità:** $x\perp y\iff\langle x,y\rangle=0$ (il vettore nullo è ortogonale a tutti). Non vale il principio di annullamento del prodotto.

## Formule chiave
$$\|x\|=\sqrt{\langle x,x\rangle},\qquad \cos\theta=\frac{\langle x,y\rangle}{\|x\|\,\|y\|},\qquad \|x\pm y\|^2=\|x\|^2\pm2\langle x,y\rangle+\|y\|^2$$
Il segno di $\langle\vec u,\vec v\rangle$ è quello di $\cos\theta$: positivo per angolo acuto, nullo per angolo retto, negativo per angolo ottuso.

## Intuizione
$\langle\vec u,\vec v\rangle$ è la lunghezza di $\vec u$ per la proiezione di $\vec v$ su $\vec u$. La seconda identità notevole è il teorema di Carnot, che per vettori ortogonali diventa Pitagora.

## Come si usa
- Esempio (p. 14 di `3_Calcolo_vettori_in_R^3`): $\langle[1,2,3],[4,5,6]\rangle=4+10+18=32$.
- Angolo: $\langle i,\,i+j\rangle=1=1\cdot\sqrt2\cos\theta$, quindi $\theta=\pi/4$.
- Dati $\|\vec u\|=3$, $\|\vec v\|=5$, $\|\vec u+\vec v\|=7$: da $49=9+30\cos\theta+25$ si ricava $\cos\theta=1/2$, $\theta=\pi/3$ (`1_Vettori.pdf` p. 36).
- Dimostrare $\vec u\perp\vec v\iff\|\vec u+\vec v\|=\|\vec u-\vec v\|$ con le identità notevoli.

## Nei corsi
- **Algebra lineare** (triennale): introdotto sui vettori geometrici e poi su $\mathbb R^3$ e $\mathbb R^n$ come prototipo di prodotto scalare euclideo. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/1_Vettori.pdf` (p. 27-35, 65-67); `Appunti, riassunti e formulari/3_Calcolo_vettori_in_R^3.pdf` (p. 14-28); `Appunti, riassunti e formulari/euclidei-slides.pdf` (R. Notari, §1-2).
- **Fisica 1** (triennale): ripreso nella lezione di calcolo vettoriale del 2/03/2022 come $\vec A\cdot\vec B=|\vec A||\vec B|\cos\theta$, con proprietà commutativa, prodotto di un vettore per sé stesso uguale al quadrato del modulo, prodotto nullo tra vettori perpendicolari; molte grandezze della meccanica sono definite così (lavoro $dW=\vec F\cdot d\vec r$, potenza, flusso). Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Calcolo_vettoriale/Calcolo_Vettoriale.pdf` (pp. 26-34).
- **Programmazione e calcolo scientifico** (triennale): appunti di geometria computazionale, uno dei due strumenti base (con il prodotto vettoriale) per i problemi geometrici: per $P_1,P_2\in\mathbb E^d$, $P_1\cdot P_2=P_1^TP_2=\sum_{i=1}^dx_i^1x_i^2$, con le proprietà $P_1\cdot P_2=\|P_1\|_2\|P_2\|_2\cos\theta$ e $\|P_1\|_2^2=P_1\cdot P_1$. Serve a dire se un punto allineato con una retta sta prima o dopo $P_0$ e a proiettare un punto sulla retta ($\alpha=\frac{u\cdot v}{\|u\|_2^2}$). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_1.pdf` (p. 2-4, scansione letta visivamente).

## Prerequisiti
- [[Vettori applicati e vettori liberi]]: modulo, angolo e ortogonalità tra vettori

## Porta a
- [[Proiezione ortogonale di un vettore]]: componente di un vettore lungo un altro
- [[Disuguaglianza di Cauchy-Schwarz]]: conseguenza di |cos θ| ≤ 1
- [[Prodotto misto]]: prodotto scalare di un prodotto vettoriale con un terzo vettore
- [[Spazio vettoriale euclideo]]: le proprietà diventano la definizione astratta
- [[Equazione del piano]]: il vettore normale è ortogonale al piano
- [[Formule di Poisson]]: u·u=1 implica u'⊥u
- [[Lavoro di una forza]]: dW = F·dr
- [[Teorema di Gauss del flusso]]: il flusso è E·n dS

## Collegati
- [[Norme vettoriali]]: il modulo è la norma 2 (euclidea)
- [[Prodotto vettoriale]]: insieme danno |u×v|² = |u|²|v|² − ⟨u,v⟩²
