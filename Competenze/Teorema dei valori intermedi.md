---
tipo: competenza
area: analisi
corsi: [Analisi 1, Istituzioni topologia]
livello: [triennale]
aliases: ["intermediate value theorem", "immagine di un intervallo"]
tags: [competenza, area/analisi]
---

# Teorema dei valori intermedi

> Una funzione continua su un intervallo assume tutti i valori compresi tra due suoi valori: l'immagine di un intervallo è un intervallo.

## Definizione / enunciato
**Teorema 1.20** (Mazzi). Se $f$ è continua su $[a,b]$, l'immagine $f([a,b])$ contiene l'intervallo di estremi $f(a)$ e $f(b)$.

**Teorema 1.21.** Se $f$ è continua su un intervallo $I$, allora $f(I)$ è un intervallo di estremi $\alpha=\inf_I f$ e $\beta=\sup_I f$.

(Morandotti, cor. 3.2.14 "Bolzano-1": una funzione continua su un intervallo qualunque assume tutti i valori tra il suo inf e il suo sup.)

## Formule chiave
$$f(a)<y<f(b)\ \Rightarrow\ \exists x\in(a,b):\ f(x)=y\qquad(\text{zeri applicato a }f-y)$$

## Intuizione
Il grafico continuo non salta nessuna quota. Il teorema non dice se l'intervallo immagine è aperto, chiuso, limitato o no.

## Come si usa
Esempi di Mazzi (es. 1.33) sui tipi di immagine: $x$ su $(0,1)$ dà $(0,1)$; $\sin x$ su $(0,2\pi)$ dà $[-1,1]$; $\tan x$ su $(-\pi/2,\pi/2)$ dà $\mathbb R$; $\log x$ su $(0,1)$ dà $(-\infty,0)$; $\arctan$ su $\mathbb R$ dà $(-\pi/2,\pi/2)$; $x^2$ su $\mathbb R$ dà $[0,+\infty)$; $e^x$ dà $(0,+\infty)$. Serve per stabilire l'immagine di una funzione e il numero di soluzioni di $f(x)=k$; è il passo chiave per la continuità dell'inversa e per la media integrale.

## Nei corsi
- **Analisi 1** (triennale): "esistenza ... dei valori intermedi", con dimostrazione. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (teor. 1.20-1.21, oss. 1.13, es. 1.33, pp. 55-56); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (cor. 3.2.14, PDF p. 100).
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): Cor. 6.12 delle note Ferrarotti. Se $f:X\to\mathbb R$ è continua e $K$ è connesso e compatto, $f$ assume ogni valore $c\in[m,M]$ fra minimo e massimo su $K$ (si applica il teorema degli zeri a $f-c$). Le dispense Pejsachowicz provano la versione su un intervallo (Teor. 9.1). Caratterizzano poi i connessi: $X$ è connesso $\iff$ ogni $f:X\to\mathbb R$ continua ha la proprietà dei valori intermedi (Teor. 9.2, punto 12 della lista delle dimostrazioni per l'orale). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (p. 46); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§9.1, pp. 85-86).

## Prerequisiti
- [[Teorema degli zeri]]: si applica a f-y
- [[Spazio connesso]]: versione su un connesso compatto (Istituzioni topologia)

## Porta a
- [[Teorema di Weierstrass]]: l'immagine è un intervallo
- [[Continuità della funzione inversa]]: f(I) è un intervallo
- [[Teorema della media integrale]]: f assume il valore medio

## Collegati
- Nessuno.
