---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["method of undetermined coefficients", "metodo dei coefficienti indeterminati", "soluzione particolare", "risonanza"]
tags: [competenza, area/analisi]
---

# Metodo di somiglianza

> Per termini noti del tipo $P(t)e^{\alpha t}\cos(\beta t)$ o $P(t)e^{\alpha t}\sin(\beta t)$ la soluzione particolare si cerca della stessa forma, moltiplicata per $t$ o $t^2$ se $\alpha+i\beta$ è radice dell'equazione caratteristica.

## Definizione / enunciato
**Teorema 5.2.4** (Lussardi). Sia $f(t)=P(t)e^{\alpha t}\cos(\beta t)$ oppure $f(t)=P(t)e^{\alpha t}\sin(\beta t)$, con $P$ polinomio di grado $n$, e siano $\lambda_1,\lambda_2$ le radici di $\lambda^2=a\lambda+b$. Una soluzione particolare di $u''=au'+bu+f$ è:
- (a) se $\alpha+i\beta$ **non** è radice: $v(t)=e^{\alpha t}\big(Q_1(t)\cos(\beta t)+Q_2(t)\sin(\beta t)\big)$;
- (b) se $\alpha+i\beta$ è radice di molteplicità $1$: $v(t)=t\,e^{\alpha t}\big(Q_1(t)\cos(\beta t)+Q_2(t)\sin(\beta t)\big)$;
- (c) se $\alpha+i\beta$ è radice di molteplicità $2$: $v(t)=t^2e^{\alpha t}Q(t)$,

con $Q_1,Q_2,Q$ polinomi di grado $n$ da determinare sostituendo nell'equazione.

## Formule chiave
$$f=P_n(t)e^{\alpha t}\{\cos,\sin\}(\beta t)\ \Rightarrow\ v=t^m e^{\alpha t}\big(Q_1\cos\beta t+Q_2\sin\beta t\big),\quad m=\text{molteplicità di }\alpha+i\beta$$

## Intuizione
Derivando polinomi, esponenziali e funzioni trigonometriche si ottengono funzioni dello stesso tipo, quindi si può "indovinare" la forma della soluzione. Se la forma proposta risolve già l'omogenea (**risonanza**, Morandotti def. 6.1.21), sostituendola si otterrebbe $0$: per questo si moltiplica per $t$ o $t^2$.

## Come si usa
Si confronta $\alpha+i\beta$ con le radici caratteristiche, si scrive $v$ con coefficienti incogniti, si sostituisce e si uguagliano i coefficienti. Morandotti (teor. 6.1.20) lo formula così: se $f(x)=P(x)e^{\gamma x}$ e $\gamma$ è radice del polinomio caratteristico con molteplicità $\mu$ (eventualmente $\mu=0$), si cerca $y_p(x)=Q(x)e^{\gamma x}$ con $\deg Q=\deg P+\mu$; nei suoi esempi compaiono $y_p(x)=Ax^2e^{2x}$ e $y_p(x)=Ae^{2x}$. Per termini noti somma di più tipi si usa il principio di sovrapposizione. Esercizi tipo: esercitazione 27 (2021-22).

## Nei corsi
- **Analisi 1** (triennale): "metodo di calcolo di una soluzione dell'equazione completa nel caso di termini noti di forma particolare". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispensa Lussardi.pdf` (teor. 5.2.4, pp. 87-88); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 6.1.20, def. 6.1.21, PDF pp. 262-265).

## Prerequisiti
- [[Equazioni lineari del secondo ordine a coefficienti costanti]]: fornisce la soluzione particolare
- [[Forma trigonometrica ed esponenziale dei numeri complessi]]: si confronta α+iβ con le radici

## Porta a
- Nessuno.

## Collegati
- Nessuno.
- [[Relazioni ricorsive lineari non omogenee]]: stesso metodo per le ricorrenze. Con $f(n)=\lambda^nh(n)$ si cerca $p_n=\lambda^nn^mq(n)$, con $m$ uguale alla molteplicità di $\lambda$ come radice (Matematica discreta)
