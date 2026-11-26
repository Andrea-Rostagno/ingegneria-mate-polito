---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["central field", "campi centrali", "campo radiale", "radial field", "potenziale di un campo centrale"]
tags: [competenza, area/analisi]
---

# Campo centrale

> Un campo diretto come il vettore posizione con intensità che dipende solo dalla distanza dall'origine: è sempre conservativo, con potenziale $H(\|P\|)$.

## Definizione / enunciato
$F:\mathbb R^n\setminus\{0\}\to\mathbb R^n$ è **centrale** se
$$F(P)=\frac P{\|P\|}\,h(\|P\|),\qquad h:(0,+\infty)\to\mathbb R\ \text{continua}.$$
$F(P)$ ha la direzione di $P$, intensità $|h(\|P\|)|$, e punta verso l'origine se $h<0$, verso l'esterno se $h\ge0$.

**Teorema.** Un campo centrale è conservativo in tutto $\mathbb R^n\setminus\{0\}$ e un potenziale è $f(P)=H(\|P\|)$, dove $H$ è una primitiva di $h$ su $(0,+\infty)$.

## Formule chiave
Campo di una carica nell'origine (come scritto a lezione): $F=\varepsilon_0q\frac{P}{\|P\|^3}=\frac P{\|P\|}\cdot\frac{\varepsilon_0q}{\|P\|^2}$, cioè $h(t)=\frac{\varepsilon_0q}{t^2}$. (Costante riportata come scritta sulla pagina; per la forma fisica vedi Campo elettrostatico.)

## Intuizione
Per $n=2$ basta verificare che $\nabla H(\|P\|)=\frac P{\|P\|}h(\|P\|)$ (esercizio della lezione). È un caso in cui l'aperto non è semplicemente connesso ($\mathbb R^2\setminus\{0\}$) eppure il campo è conservativo.

## Come si usa
Riconosciuto un campo centrale, il potenziale si scrive subito integrando $h$. Esercizio della lezione: la forza di una molla attaccata all'origine su una massa in $(x,y)$ o $(x,y,z)$ è un campo centrale.

## Nei corsi
- **Analisi 2** (triennale): lezione del 09/11/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 12 2022 campi cons e Green.pdf` (pp. 8-11).

## Prerequisiti
- [[Campo conservativo]]: i campi centrali sono conservativi

## Porta a
- Nessuno.

## Collegati
- [[Forza centrale]]: le forze centrali della meccanica
- [[Campo elettrostatico]]: campo di una carica puntiforme
- [[Insieme semplicemente connesso]]: R^2 senza l'origine non è semplicemente connesso, ma i campi centrali sono conservativi
