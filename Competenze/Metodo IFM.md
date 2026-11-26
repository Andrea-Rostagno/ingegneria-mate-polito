---
tipo: competenza
area: statistica
corsi: [Prova finale]
livello: [triennale]
aliases: ["inference functions for margins", "inference from margins", "IFM", "stima a due stadi", "two-stage estimation", "inferenza dalle marginali", "stima parametrica delle marginali", "approccio parametrico alle marginali"]
tags: [competenza, area/statistica]
---

# Metodo IFM

> Stima a due stadi: prima ogni marginale per massima verosimiglianza, poi il parametro della copula sui dati trasformati con le marginali stimate.

## Definizione / enunciato
**Pellerey, slide 99**. Con il modello $F(x,y)=C_\theta(F_\alpha(x),G_\beta(y))$:
1. si stimano separatamente le marginali, $\hat\alpha_n$ e $\hat\beta_n$ di massima verosimiglianza;
2. lo stimatore IFM di $\theta$ massimizza
$$\mathcal L(\theta)=\sum_{i=1}^n\ln c_\theta\big(\hat F(X_i),\hat G(Y_i)\big),\qquad \hat F=F_{\hat\alpha_n},\ \hat G=G_{\hat\beta_n}.$$
(La slide scrive $C_\theta$ nell'argomento del logaritmo; per coerenza con la ML deve essere la densità $c_\theta$: da verificare sul PDF.)

## Formule chiave
Primo stadio nella tesi (§4.4.1), per ogni serie:
$$\hat\mu,\hat\sigma=\arg\max_{\mu,\sigma}\sum_i\log f_N(x_i\mid\mu,\sigma),\qquad \hat\nu,\hat\mu,\hat\sigma=\arg\max_{\nu,\mu,\sigma}\sum_i\log f_t(x_i\mid\nu,\mu,\sigma),$$
e scelta del modello con $\mathrm{AIC}=-2\log L+2k$. Poi $u_i=\hat F(x_i)$ con `stats.norm.cdf` o `stats.t.cdf`. Nella tesi è il passo 5 di §5.2.1 ("Pseudo MLE": prima le marginali $F_j$, poi la copula su $U_{ij}=F_j(x_{ij})$).

## Intuizione
Spezzare il problema riduce molto il costo rispetto alla ML congiunta di tutti i parametri, e ogni stadio è un problema standard. Il prezzo: gli errori delle marginali si trasmettono alla copula, perciò è sensibile alla loro specificazione.

## Come si usa
Per le serie Open e Close la t di Student vince sulla normale per AIC (Open: $df=1.8257$, $\mu=0.0042$, $\sigma=0.0018$; tab. 4.3). La tesi le chiama "rendimenti", ma codice (`vol_returns['vol1']`) e valori (media della normale 0.0056 = volatilità media 0.56%) indicano le volatilità rolling (osservazione mia). Confrontando lo scatter $(u_1,u_2)$ ottenuto così con quello dei ranghi (fig. 4.1) la tesi **abbandona l'approccio parametrico** e passa alla normalizzazione empirica, per non dipendere da una marginale mal specificata.

## Nei corsi
- **Prova finale** (triennale): §4.4.1 "Stima parametrica" e §4.4.2 "Confronto tra approcci parametrico e non parametrico". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (pp. 31-34, 42); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 97, 99).

## Prerequisiti
- [[Stimatore di massima verosimiglianza]]: stima delle marginali
- [[Teorema di Sklar]]: separazione in marginali e copula
- [[Rendimenti logaritmici]]: serie finanziarie di cui si stimano le marginali
- [[Volatilità rolling]]: serie effettivamente usate nel codice del §4.4

## Porta a
- [[Massima pseudo-verosimiglianza]]: si sostituiscono le marginali parametriche con quelle empiriche

## Collegati
- [[Massima verosimiglianza per copule]]: stima congiunta in un passo
- [[Criteri di informazione AIC e BIC]]: scelta fra normale e t
- [[Distribuzione t di Student]]: marginale scelta
- [[Pseudo-osservazioni]]: alternativa non parametrica adottata
