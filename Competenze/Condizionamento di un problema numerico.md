---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["numero di condizionamento", "condition number", "problema ben condizionato", "problema mal condizionato", "problema numerico"]
tags: [competenza, area/numerica]
---

# Condizionamento di un problema numerico

> Misura di quanto le perturbazioni dei dati si amplificano nei risultati, indipendentemente dall'algoritmo usato.

## Definizione / enunciato
Un **problema numerico** è una relazione funzionale tra dati $x$ e risultati $y$, esplicita $y=f(x)$ o implicita $f(x,y)=0$, con dati e risultati rappresentabili da numeri, vettori o matrici di dimensione finita. Sia $\bar x$ una perturbazione dei dati e $\bar y$ il risultato ottenuto da $\bar x$ in precisione infinita.

Il problema è **ben condizionato** se l'errore relativo su $\bar y$ è dello stesso ordine di quello su $\bar x$ o minore, **mal condizionato** altrimenti. Il **numero di condizionamento** $K(f,x)$ è la più piccola costante per cui vale
$$\frac{|y-\bar y|}{|y|}\le K(f,x)\,\frac{|x-\bar x|}{|x|}$$
(con norme se i dati sono vettori, matrici o funzioni).

## Formule chiave
Somma $y=x_1+x_2$, con $\bar x_i=x_i(1+\varepsilon_i)$:
$$\frac{|y-\bar y|}{|y|}\le K_1|\varepsilon_1|+K_2|\varepsilon_2|,\qquad K_i=\Big|\frac{x_i}{x_1+x_2}\Big|,\quad K=\max\{K_1,K_2\}$$

## Intuizione
Il condizionamento è una proprietà del problema, non del metodo: nessun algoritmo può dare risultati più accurati di quanto il condizionamento permetta. Va distinto dalla stabilità, che riguarda l'algoritmo.

## Come si usa
Esempi: la somma è un problema esplicito, un sistema $2\times2$ è implicito. Per la somma $K\to\infty$ se $x_1+x_2\to0$: sommare numeri di segno opposto e quasi uguali in modulo è mal condizionato, e questo dà un'interpretazione alternativa della cancellazione numerica.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn1_aritmetica_print.pdf` (slide 58-64). Il concetto viene poi specializzato ai sistemi lineari (`triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 22-25)) e agli autovalori (`triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 20-23)).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): problema numerico $y=f(x)$ o $f(x,y)=0$; ben condizionato se $\frac{\|y-\bar y\|}{\|y\|}\approx\frac{\|x-\bar x\|}{\|x\|}$; $K(f,x)$ è il più piccolo valore per cui $\frac{\|y-\bar y\|}{\|y\|}\le K(f,x)\frac{\|x-\bar x\|}{\|x\|}$. Il corso applica poi il concetto all'interpolazione (costante di Lebesgue) e ai problemi di Cauchy. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_01_aritmetica_print.pdf` (p. 29-32).

## Prerequisiti
- [[Errore assoluto e relativo]]: rapporto tra errori relativi di dati e risultati

## Porta a
- [[Costante di Lebesgue]]: numero di condizionamento dell'interpolazione polinomiale (Metodi numerici)
- [[Condizionamento dei problemi di Cauchy]]: stessa domanda per un'equazione differenziale con dati perturbati (Metodi numerici)
- [[Stabilità di un algoritmo]]: separa il ruolo del problema da quello dell'algoritmo
- [[Condizionamento di un sistema lineare]]: caso del problema Ax = b
- [[Teorema di Bauer-Fike]]: condizionamento del problema degli autovalori

## Collegati
- [[Cancellazione numerica]]: somma mal condizionata di numeri opposti quasi uguali
