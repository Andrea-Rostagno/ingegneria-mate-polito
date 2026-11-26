---
tipo: competenza
area: finanza
corsi: [Prova finale]
livello: [triennale]
aliases: ["DAX copula analysis", "analisi delle copule sul DAX", "dipendenza Open-Close del DAX", "confronto tra metodi di stima delle copule", "scelta della copula migliore", "pipeline della tesi"]
tags: [competenza, area/finanza]
---

# Stima delle copule sul DAX

> Procedura applicativa della tesi: dalle quotazioni al minuto del DAX alle volatilità rolling di Open e Close, stima di cinque copule con tre metodi, media dei parametri e scelta con AIC/BIC: vince la t di Student.

## Definizione / enunciato
Passi (cap. 4-5):
1. **Dati**: OHLC del DAX al minuto, 02/01/2020-03/03/2022, 616397 righe; pulizia con `Pulizia Dato.py` (delimitatore, encoding, conversione dei numeri con la virgola, date) e filtro IQR.
2. **Variabili**: log-rendimenti di Open e Close, campionati per avere circa 50000 righe; **volatilità rolling** a 21 periodi annualizzate. La copula è stimata sulle volatilità, non sui rendimenti.
3. **Uniformi**: ranghi $/(n+1)$.
4. **Dipendenza**: Pearson 0.8873, Kendall 0.6598, Spearman 0.8424 (tab. 5.6).
5. **Stima** di gaussiana, t, Clayton, Gumbel, Frank con MLE sulle pseudo-osservazioni, metodo dei momenti (inversione di $\tau$) e MCMC.
6. **Media** dei parametri dei tre metodi e **AIC/BIC**.

## Formule chiave
Parametri stimati (tab. 5.10-5.13):

| copula | MLE | momenti | MCMC | media |
|---|---|---|---|---|
| gaussiana $\rho$ | 0.8569 | 0.8606 | 0.863 | 0.8602 |
| t $(\rho,\nu)$ | 0.8599, 6.3485 | 0.8606, – | –, – | 0.8603, 6.3485 |
| Clayton $\theta$ | 2.0808 | 3.8789 | 2.154 | 2.7046 |
| Gumbel $\theta$ | 1.1457 | 2.9394 | 1.138 | 1.7410 |
| Frank $\theta$ | $-0.4603$ | 9.7812 | $-0.460$ | 2.9536 |

Ho verificato che la colonna "media" è la media aritmetica dei valori disponibili (per esempio Gumbel $(1.1457+2.9394+1.138)/3=1.7410$; per la t solo due valori di $\rho$ e uno di $\nu$).

## Intuizione
Le volatilità di apertura e chiusura dello stesso indice sono fortemente dipendenti (Pearson 0.8873). Nella tab. 5.14 la t ha log-verosimiglianza molto maggiore delle altre (119436.68 contro 31387.26 della gaussiana con i parametri medi); attenzione però: la funzione `t_copula_loglik` del §5.3.2 include $-\frac12\log(1-\rho^2)$ ma sembra non includere il fattore $1/(2\pi)$ della densità t bivariata (slide 23 di Pellerey), cioè $-\log(2\pi)$ per ogni osservazione, mentre la gaussiana è completa: i due valori potrebbero non essere confrontabili (lettura mia del codice). Un conto approssimato, con $n$ ricavato dalla differenza BIC$-$AIC, suggerisce che la t resterebbe prima ma con un margine molto più piccolo (da verificare rieseguendo il codice). Anche la log-verosimiglianza della Gumbel nel codice non corrisponde alla vera densità (vedi la nota della famiglia), quindi la sua stima MLE e il suo posto in classifica sono incerti. Il confronto fra metodi mostra anche i loro limiti: per Gumbel e Clayton momenti e MLE danno valori molto diversi, e per Frank MLE e MCMC danno un $\theta$ negativo nonostante $\tau>0$.

## Come si usa
Risultato finale (tab. 5.15): t di Student con $\rho=0.8603$, $\nu=6.3485$, AIC $=-238869.3669$, BIC $=-238851.8343$. Con l'approccio bayesiano la migliore per WAIC è invece la Gumbel (tab. 5.9). La copula scelta alimenta l'esempio di portafoglio, che però usa una copula gaussiana con $\rho=0.95$.

## Nei corsi
- **Prova finale** (triennale): §5.3 "Implementazione pratica: applicazione ai dati del DAX", slide "Implementazione pratica" e "Risultati finali". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§4.1-4.2, pp. 27-28; §5.3, pp. 61-89); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/Final comparison.py`; `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/Pulizia Dato.py`; `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/TESI_PPTX.pptx`.

## Prerequisiti
- [[Volatilità rolling]]: variabili modellate
- [[Pseudo-osservazioni]]: trasformazione uniforme
- [[Massima pseudo-verosimiglianza]]: stime "MLE"
- [[Metodo dei momenti]]: stime per inversione del tau
- [[Stima bayesiana]]: stime MCMC
- [[Criteri di informazione AIC e BIC]]: scelta finale

## Porta a
- [[Simulazione da una copula]]: generazione di scenari dalla copula scelta

## Collegati
- [[Copula t di Student]]: vincitrice
- [[Tau di Kendall]]: valore 0.6598 usato per i momenti
- [[Bontà di adattamento di una copula]]: confronto grafico originali-simulati
- [[Qualità dei dati]]: pulizia del dataset
