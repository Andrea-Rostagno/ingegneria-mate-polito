---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Gauss's law for magnetism", "flusso del campo magnetico", "magnetic flux", "weber", "div B = 0", "campo solenoidale", "assenza di monopoli magnetici"]
tags: [competenza, area/fisica]
---

# Legge di Gauss per il campo magnetico

> Il flusso del campo magnetico attraverso qualsiasi superficie chiusa è nullo: non esistono monopoli magnetici, le linee di $\vec B$ sono chiuse e il campo è solenoidale.

## Definizione / enunciato
Il **flusso magnetico** attraverso una superficie $S$ è $\Phi_{magn}=\int_S\vec B\cdot d\vec S$; unità $T\,m^2=Wb$ (weber).
Poiché l'esperienza mostra che non esistono masse o monopoli magnetici, le linee di forza del campo magnetico sono sempre chiuse: attraverso una superficie chiusa tante linee entrano quante escono. **Il flusso del campo magnetico attraverso una superficie chiusa è sempre nullo.** La legge vale sempre ed è la **seconda equazione di Maxwell**.
**Dimostrazione dalla legge di Ampère-Laplace:** si prende la divergenza di $\vec B(\vec r)$ scritto come integrale sul circuito e si usa l'identità $\vec\nabla\cdot(\vec A\times\vec B)=\vec B\cdot(\vec\nabla\times\vec A)-\vec A\cdot(\vec\nabla\times\vec B)$. Entrambi i termini si annullano: il primo perché nabla agisce sulle derivate rispetto a $\vec r$ mentre $\vec j$ dipende da $\vec r'$, il secondo perché è il rotore di un campo centrale che varia come $1/r^2$.
**Forma differenziale:** con il ragionamento usato per la legge di Gauss elettrica (con $\vec B$ al posto di $\vec E$ e $\rho=0$) e il teorema della divergenza si ottiene $\mathrm{div}\vec B=0$.

## Formule chiave
$$\Phi_{magn}=\int_S\vec B\cdot d\vec S,\qquad \Phi_{magn}=\oint_S\vec B\cdot d\vec S=0$$
$$\vec B(\vec r)=\int_{\tau'(circuito)}\frac{\mu_0}{4\pi}\vec j(\vec r')\times\frac{\vec r-\vec r'}{|\vec r-\vec r'|^3}dSdl$$
$$\int_{vol-V}\vec\nabla\cdot\vec B\,dV=\oint_{S-chiusa}\vec B\cdot d\vec S=0\;\Rightarrow\;\frac{\partial B_x}{\partial x}+\frac{\partial B_y}{\partial y}+\frac{\partial B_z}{\partial z}=\mathrm{div}\vec B=\vec\nabla\cdot\vec B=0$$

## Intuizione
È la legge di Gauss elettrica con carica magnetica sempre zero: non c'è nessun punto in cui le linee di $\vec B$ nascano o muoiano. Un magnete spezzato dà due magneti, mai un polo isolato.

## Come si usa
Da $\vec\nabla\cdot\vec B=0$ e dall'identità $\vec\nabla\cdot\vec\nabla\times\vec A=0$ segue che $\vec B$ si può scrivere come rotore di un potenziale vettore. Il flusso di $\vec B$ attraverso una superficie aperta è la grandezza la cui variazione genera la fem indotta.

## Nei corsi
- **Fisica 2** (triennale): lezione 19&20, "Il flusso del campo magnetico". Fonti: `triennale/ANNO 2/fisica 2/lezioni/19&20.  LEZIONE.pdf` (pp. 2-7, 30).

## Prerequisiti
- [[Legge di Ampère-Laplace]]: dalla divergenza dell'espressione di B
- [[Teorema della divergenza]]: dalla forma integrale alla forma differenziale

## Porta a
- [[Potenziale vettore]]: div B = 0 permette di scrivere B = rot A
- [[Legge di Faraday-Henry]]: la fem dipende dalla variazione del flusso di B
- [[Equazioni di Maxwell]]: seconda equazione

## Collegati
- Nessuno.
