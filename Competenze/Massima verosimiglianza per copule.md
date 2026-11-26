---
tipo: competenza
area: statistica
corsi: [Prova finale]
livello: [triennale]
aliases: ["copula maximum likelihood", "MLE per copule", "stima di massima verosimiglianza delle copule", "full maximum likelihood", "log-verosimiglianza della copula", "copula log-likelihood", "riparametrizzazione tanh"]
tags: [competenza, area/statistica]
---

# Massima verosimiglianza per copule

> Si stima il parametro della copula massimizzando la somma dei log della densità di copula (più, nella versione completa, le log-densità marginali); è il metodo principale della tesi.

## Definizione / enunciato
Procedura (tesi §5.2.1). Con $n$ osservazioni $\mathbf x_i=(x_{i1},\dots,x_{id})$ da $F(\mathbf x;\theta)$:
1. $L(\theta;\mathbf x_1,\dots,\mathbf x_n)=\prod_i f(\mathbf x_i;\theta)$;
2. per Sklar $f(\mathbf x_i;\theta)=c(F_1(x_{i1}),\dots,F_d(x_{id});\theta)\prod_jf_j(x_{ij})$;
3. se le marginali sono **note**, la verosimiglianza dipende dal parametro solo tramite la copula: $L(\theta)=\prod_ic(F_1(x_{i1}),\dots,F_d(x_{id});\theta)$;
4. $\hat\theta=\arg\max_\theta\sum_{i=1}^n\log c(F_1(x_{i1}),\dots,F_d(x_{id});\theta)$.
Se le marginali non sono note si stimano prima e si passa alla pseudo-verosimiglianza.

## Formule chiave
ML completa con marginali parametriche (Pellerey, slide 98):
$$\mathcal L(\theta,\alpha,\beta)=\sum_{i=1}^n\ln\Big(c_\theta\big(F_\alpha(X_i),G_\beta(Y_i)\big)f_\alpha(X_i)g_\beta(Y_i)\Big).$$
È facile da implementare e dà stime asintoticamente gaussiane e non distorte, ma **sbaglia la dipendenza se le marginali sono mal specificate**.

## Intuizione
Grazie a Sklar la log-verosimiglianza si separa in un pezzo di dipendenza e in pezzi marginali: il parametro di copula riflette solo la struttura di dipendenza. Vantaggi elencati dalla tesi: efficienza statistica, flessibilità, compatibilità con Sklar, buon supporto software. Limiti: costo computazionale e ottimizzazione iterativa (Newton-Raphson, metodi stocastici) con possibili problemi di convergenza; sensibilità a modello errato e agli outlier; affidabilità solo asintotica; vincoli (matrice di correlazione definita positiva per gaussiana e t).

## Come si usa
Nel codice si **minimizza la log-verosimiglianza cambiata di segno** con `scipy.optimize.minimize(..., method='L-BFGS-B')`:
- t di Student (§5.2.2): riparametrizzazione $\rho=\tanh(p_0)$, $\nu=e^{p_1}+2$, punto iniziale $(0.5,\log 8)$;
- sul DAX (§5.3.2): vincoli $\rho\in[-0.999,0.999]$, $\nu\in[2.001,30]$, Clayton $\theta\in[0.001,20]$, Gumbel $[1.001,20]$, Frank $[-20,20]$, punti iniziali dalla correlazione di Pearson o dall'inversione di $\tau$.
Risultati (tab. 5.7): gaussiana $\rho=0.8569$, t $\rho=0.8599$, $\nu=6.3485$ (log-verosimiglianza 119436.7486, la più alta), Clayton $\theta=2.0808$, Gumbel $\theta=1.1457$, Frank $\theta=-0.4603$.

## Nei corsi
- **Prova finale** (triennale): §5.2.1-5.2.2 e §5.3.2. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (pp. 42-46, 67-74); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/MLE.py`; `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/copula-analysis.py` (sezioni 5-6); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 97-98).

## Prerequisiti
- [[Stimatore di massima verosimiglianza]]: principio generale
- [[Funzione di verosimiglianza]]: oggetto da massimizzare
- [[Densità di una copula]]: termine $\log c$
- [[Teorema di Sklar]]: separazione marginali-copula

## Porta a
- [[Metodo IFM]]: versione a due stadi
- [[Massima pseudo-verosimiglianza]]: versione con marginali empiriche
- [[Criteri di informazione AIC e BIC]]: usano la log-verosimiglianza massima
- [[Stima delle copule sul DAX]]: una delle tre stime confrontate

## Collegati
- [[Metodo dei momenti]]: alternativa più semplice ma meno efficiente
- [[Metodo di Newton in ottimizzazione]]: Newton-Raphson è citato dalla tesi fra i metodi iterativi per massimizzare la verosimiglianza
- [[Copula t di Student]]: stima congiunta di $\rho$ e $\nu$
