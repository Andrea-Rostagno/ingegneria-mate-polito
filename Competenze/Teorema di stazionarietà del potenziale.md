---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["stationarity of the potential", "equilibrio dei sistemi conservativi", "equilibrium of conservative holonomic systems", "configurazioni di equilibrio ordinarie", "punti di equilibrio del potenziale", "Theorem 6.2"]
tags: [competenza, area/fisica]
---

# Teorema di stazionarietà del potenziale

> Per un sistema olonomo con forze conservative, le configurazioni interne di equilibrio sono esattamente i punti stazionari del potenziale $U(q)$.

## Definizione / enunciato
**Teorema 6.2:** le configurazioni interne (bulk) $C$ di un sistema olonomo soggetto a forze conservative sono di equilibrio se e solo se
$$\left.\frac{\partial U}{\partial q_h}\right|_C=0,\qquad h=1,\dots,N\qquad(6.9).$$
Segue dal [[Principio dei lavori virtuali]] con $Q_h=\partial U/\partial q_h$.

## Formule chiave
Con vincoli unilateri $q\in[a,b]$, anche un estremo può essere di equilibrio: in $q=b$ con $\frac{\partial U}{\partial q}\big|_b>0$ e $\delta q\le0$ si ha $\delta L^{(a)}=Q\delta q\le0$, quindi $b$ è di equilibrio (la "parete" respinge il sistema). In $q=a$ con $\frac{\partial U}{\partial q}\big|_a>0$ e $\delta q\ge0$, invece, $\delta L^{(a)}\ge0$ e non c'è equilibrio (Lect5 p. 59, Fig. 6.3).

## Intuizione
Il potenziale ($U$, con energia potenziale $V=-U$) riassume tutte le forze attive: dove è stazionario, il lavoro virtuale al primo ordine è nullo per ogni spostamento reversibile.

## Come si usa
Si scrive $U(q)$ (peso $U=-mgy_G$ con asse $y$ verso l'alto, oppure $U=mgy$ con asse verso il basso; molla $U=-\frac k2|B-O|^2$), si annulla il gradiente e si discutono i bordi. **Lect7, Ex4** (disco su asta con molla torsionale): $U(s,\vartheta)=Mg(s\sin\vartheta-R\cos\vartheta)-\frac12k\vartheta^2$, che dà gli equilibri $\vartheta^*=0,\pi$ con $s^*=0$ e $s^*=-\pi k/Mg$.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect5-Statics.pdf` (p. 59, Thm 6.2, Fig. 6.3; numerazione stampata); `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (p. 90); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Statica dei sistemi olonomi" ed "Esempi di potenziali notevoli", pp. 123-134).

## Prerequisiti
- [[Principio dei lavori virtuali]]: caso conservativo
- [[Componenti lagrangiane delle forze]]: Q_h = ∂U/∂q_h
- [[Forza conservativa]]: esistenza del potenziale

## Porta a
- [[Stabilità dell'equilibrio in senso statico]]: si studia la natura del punto stazionario

## Collegati
- [[Punti critici in più variabili]]: gli equilibri sono i punti critici di U
- [[Gradiente]]: ∇U = 0 nello spazio delle q
