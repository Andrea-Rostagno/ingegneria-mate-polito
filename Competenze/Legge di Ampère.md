---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Ampère's circuital law", "circuitazione del campo magnetico", "rot B = μ0 j", "correnti concatenate", "campo di un solenoide infinito", "B = μ0 n I"]
tags: [competenza, area/fisica]
---

# Legge di Ampère

> La circuitazione del campo magnetostatico lungo una linea chiusa è $\mu_0$ per la somma delle correnti concatenate; in forma differenziale $\vec\nabla\times\vec B=\mu_0\vec j$.

## Definizione / enunciato
**Forma differenziale:** applicando il rotore all'espressione di $\vec B$ data dalla legge di Ampère-Laplace si ottiene $\vec\nabla\times\vec B(\vec r)=\mu_0\vec j(\vec r)$ (calcolo svolto in Mencuccini-Silvestrini, citato nelle slide).
**Forma integrale:** con il teorema di Stokes, la circuitazione di $\vec B$ lungo una curva $L$ è il flusso del rotore su una superficie $S(L)$ che ha $L$ come contorno: $\mu_0$ per le correnti $I_k$ **concatenate** alla curva. Le correnti si prendono con segno secondo la regola della mano destra (vite destrorsa o cavatappi); quelle non concatenate non contribuiscono.
**Verifica sul filo rettilineo:** lungo una circonferenza di raggio $r$ la circuitazione vale $\mu_0I$, indipendente dal raggio; si può dimostrare che non dipende neppure dalla forma della curva.

## Formule chiave
$$\vec\nabla\times\vec B(\vec r)=\mu_0\vec j(\vec r),\qquad \oint_L\vec B\cdot d\vec l=\int_{S(L)}\vec\nabla\times\vec B\cdot dS\vec u_N=\mu_0\left(\sum_kI_k\right)_L$$
$$\oint_L\vec B\cdot d\vec l=B(2\pi r)=\left(\mu_0\frac I{2\pi r}\right)(2\pi r)=\mu_0I$$
$$\oint_L\vec B\cdot d\vec l=\mu_0\left(\sum_{i=1}^NI_i\right)=\mu_0\sum_{i=1}^N\int_{S(L)}\vec j_i\cdot d\vec s$$
Solenoide di lunghezza infinita, $n$ spire per unità di lunghezza, corrente $I$: dentro $B=\mu_0nI$, fuori $B=0$.

## Intuizione
È la controparte magnetica della legge di Gauss: là il flusso conta le cariche racchiuse, qui la circuitazione conta le correnti che "infilano" la curva. A differenza di $\vec E$, il campo magnetostatico non è conservativo dove passa corrente.

## Come si usa
In presenza di simmetria (filo, solenoide) si sceglie una curva su cui $\vec B$ è costante e tangente, o nullo: per il solenoide infinito si usa un rettangolo con un lato dentro e uno fuori, ottenendo $B=\mu_0nI$ all'interno. Insieme a $\vec\nabla\cdot\vec B=0$ completa le equazioni della magnetostatica nel vuoto.

## Nei corsi
- **Fisica 2** (triennale): lezione 19&20, "Il rotore del campo magnetostatico" e "Applicazione della legge di Ampère". Fonti: `triennale/ANNO 2/fisica 2/lezioni/19&20.  LEZIONE.pdf` (pp. 11-26, 30).

## Prerequisiti
- [[Legge di Biot-Savart]]: circuitazione lungo una circonferenza attorno al filo
- [[Teorema di Stokes]]: dalla forma differenziale a quella integrale

## Porta a
- [[Magnetizzazione e campo magnetizzante]]: la circuitazione di H conta solo le correnti libere
- [[Autoinduzione]]: campo del solenoide per calcolare L
- [[Legge di Ampère-Maxwell]]: si corregge la legge per campi variabili

## Collegati
- Nessuno.
