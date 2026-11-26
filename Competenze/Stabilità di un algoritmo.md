---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["numerical stability", "algoritmo stabile", "algoritmo instabile", "stabilità numerica"]
tags: [competenza, area/numerica]
---

# Stabilità di un algoritmo

> Proprietà di un algoritmo di non amplificare eccessivamente gli errori di arrotondamento introdotti durante il calcolo.

## Definizione / enunciato
Un **algoritmo** è una sequenza finita di operazioni che produce l'output di un problema a partire dai dati. In aritmetica finita siano $\bar x$ i dati arrotondati, $\bar y$ i risultati dell'algoritmo applicato a $\bar x$ in precisione infinita, $\tilde y$ quelli in precisione finita. Si confronta $\tilde y$ con $\bar y$.

L'algoritmo è **numericamente stabile** se l'errore relativo associato a $\tilde y$ è dell'ordine della precisione di macchina o minore; altrimenti è **instabile**.

## Formule chiave
Algoritmo instabile per $\pi$:
$$x_1=2,\qquad x_n=2^{n-1/2}\sqrt{1-\sqrt{1-4^{1-n}x_{n-1}^2}},\quad n\ge2$$
Versione stabile (razionalizzata):
$$x_1=2,\qquad x_n=x_{n-1}\sqrt{\frac{2}{1+\sqrt{1-4^{1-n}x_{n-1}^2}}},\quad n\ge2$$

## Intuizione
Condizionamento e stabilità sono indipendenti: un problema ben condizionato risolto con un algoritmo instabile dà risultati inaffidabili. La sequenza delle operazioni conta quanto il problema.

## Come si usa
La prima successione converge a $\pi$ in teoria, ma da $n=16$ i valori calcolati si allontanano e $x_{30}=0$: la quantità $z=\sqrt{1-4^{1-n}x_{n-1}^2}$ tende a 1 e $1-z$ subisce cancellazione. Razionalizzando si ottiene un algoritmo stabile, il cui errore relativo scende fino all'ordine di $\varepsilon_m$.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn1_aritmetica_print.pdf` (slide 4-5, 65-68).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): algoritmo come sequenza finita di operazioni, con $\bar x$ dati arrotondati, $\bar y$ risultati in precisione infinita, $\tilde y$ in precisione finita) ed esempio dell'algoritmo per $\pi$ reso stabile con la razionalizzazione. Per le equazioni differenziali il corso usa nozioni diverse di stabilità, legate al passo $h$. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_01_aritmetica_print.pdf` (p. 33-36).

## Prerequisiti
- [[Condizionamento di un problema numerico]]: separa il ruolo del problema da quello dell'algoritmo
- [[Precisione di macchina]]: errore confrontato con eps_m

## Porta a
- Nessuno.

## Collegati
- [[Zero-stabilità]]: analogo per i metodi per ODE, insensibilità alle perturbazioni (Metodi numerici)
- [[Cancellazione numerica]]: l'algoritmo per pi è instabile per cancellazione
- [[Pivoting parziale]]: moltiplicatori piccoli non amplificano gli errori
