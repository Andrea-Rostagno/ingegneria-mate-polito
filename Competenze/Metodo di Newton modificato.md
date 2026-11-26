---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["modified Newton method", "Newton modificato", "Hessian modification", "modifica dell'hessiana", "Newton con hessiana corretta", "bounded condition number assumption"]
tags: [competenza, area/ottimizzazione]
---

# Metodo di Newton modificato

> Variante del metodo di Newton che corregge l'hessiana in $B_k=\nabla^2f(x^{(k)})+E_k$, sufficientemente definita positiva, così la direzione è sempre di discesa. Si usa con risolutori diretti (Cholesky) e line search.

## Definizione / enunciato
Se $\nabla^2f(x^{(k)})$ non è definita positiva, il modello quadratico è illimitato inferiormente e $p_N^{(k)}$ può non essere di discesa. Si usa allora il modello
$$m_k^{MN}(p)=f(x^{(k)})+\nabla f(x^{(k)})^Tp+\tfrac12p^TB_kp.$$
"Sufficientemente definita positiva" vuol dire $\lambda_{\min}(B_k)$ positivo e limitato lontano da 0. Esempio delle note: $\lambda_{\min}=1/k$ non va bene, $\lambda_{\min}=10^{-4}+1/k$ sì.

Algoritmo, per $k=0,1,\dots$:
1. $B_k=\nabla^2f(x^{(k)})+E_k$, con $E_k=0$ se l'hessiana è già sufficientemente definita positiva;
2. risolvi $B_kp_{MN}^{(k)}=-\nabla f(x^{(k)})$;
3. poni $x^{(k+1)}=x^{(k)}+\alpha^{(k)}p_{MN}^{(k)}$, con $\alpha^{(k)}$ da backtracking con Armijo;
4. fermati quando un criterio di arresto è soddisfatto.

**Teorema** (NW, Teorema 6.3). Ipotesi:
- $\kappa(B_k)=\|B_k\|\,\|B_k^{-1}\|\le C$ per ogni $k$, con $C>0$ indipendente da $k$ (ipotesi di condizionamento limitato);
- $f\in C^2$;
- l'insieme di livello $\mathcal L=\{x:\ f(x)\le f(x^{(0)})\}$ è compatto.

Tesi: $\lim_{k\to\infty}\nabla f(x^{(k)})=0$. È un risultato globale, ma debole: riguarda il gradiente, non la convergenza di $x^{(k)}$.

## Formule chiave
Scelta semplice: $E_k=\tau_kI$. Poiché $\lambda(A+\tau I)=\lambda(A)+\tau$, imponendo $\lambda_{\min}(B_k)\ge\delta$ si ottiene
$$\tau_k=\max\big(0,\ \delta-\lambda_{\min}(\nabla^2f(x^{(k)}))\big),\qquad \delta=\sqrt{\varepsilon_m}.$$
Calcolare $\lambda_{\min}$ però è costoso. Si usa allora un'euristica con Cholesky (Alg. 6.3 di NW, 1ª ed.), con $\beta>0$ (tipicamente $10^{-3}$):
- **valore iniziale:** se $[\nabla^2f]_{ii}>0$ per ogni $i$, poni $\tau^{(0)}=0$; altrimenti $\tau^{(0)}=\beta-\min_i[\nabla^2f]_{ii}$;
- **per $j=0,1,\dots$:** prova la fattorizzazione $R^TR=\nabla^2f(x^{(k)})+\tau^{(j)}I$. Se riesce, $B_k$ è definita positiva e il fattore serve già per risolvere il sistema. Se fallisce, poni $\tau^{(j+1)}=\max(2\tau^{(j)},\beta)$.

## Intuizione
Si vuole $B_k$ vicina all'hessiana ($E_k$ piccola), ben condizionata e facile da fattorizzare. Il test sulla diagonale è solo un'euristica: $A_{ii}>0$ è necessario ma non sufficiente per la definita positività. Ad esempio $A=\begin{pmatrix}1&4\\4&1\end{pmatrix}$ ha $\det A=-15$, quindi un autovalore negativo.

## Come si usa
È la correzione da usare **con solutori diretti**; con solutori iterativi si usa invece il Newton troncato. Il tentativo di Cholesky funge sia da test di positività sia da fattorizzazione.

## Nei corsi
- **Numerical opt** (magistrale): le note avvertono che la 2ª edizione di Nocedal-Wright differisce: seguire le note. Fonti: `magistrale/Numerical opt/Pieraccini/Part_3_Nonlinear_Opt_2nd_order_methods.pdf` (p. 6-17); cenno al "corrected Hessian" in `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§6.1).

## Prerequisiti
- [[Metodo di Newton in ottimizzazione]]: il metodo di cui si corregge l'hessiana
- [[Fattorizzazione di Cholesky]]: test di definita positività e solutore
- [[Condizionamento di un sistema lineare]]: l'ipotesi $\kappa(B_k)\le C$ del teorema

## Collegati
- [[Metodo di Newton troncato]]: stesso obiettivo (direzione di discesa) ma con solutori iterativi
- [[Teorema di Zoutendijk]]: risultato globale dello stesso tipo
- [[Backtracking line search]]: scelta del passo con Armijo
