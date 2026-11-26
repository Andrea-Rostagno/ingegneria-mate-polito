---
tipo: competenza
area: analisi
corsi: [Analisi 2, Geometria differenziale]
livello: [triennale]
aliases: ["parametric surface", "superficie regolare", "vettori fondamentali", "P_u e P_v", "piano tangente a una superficie", "superficie in R^3", "superfici equivalenti", "sostegno di una superficie", "traccia di una superficie"]
tags: [competenza, area/analisi]
---

# Superficie parametrica

> Una superficie in $\mathbb R^3$ è una funzione $S(u,v)$ da un dominio piano: le derivate $P_u$, $P_v$ sono tangenti e il loro prodotto vettoriale è normale.

## Definizione / enunciato
Una **superficie** è $S:\Omega\to\mathbb R^3$, $\Omega\subset\mathbb R^2$, $S(u,v)=(X(u,v),Y(u,v),Z(u,v))$, supposta almeno $C^1(\Omega)$ e iniettiva. I **vettori fondamentali**
$$P_u=\Big(\frac{\partial X}{\partial u},\frac{\partial Y}{\partial u},\frac{\partial Z}{\partial u}\Big),\qquad P_v=\Big(\frac{\partial X}{\partial v},\frac{\partial Y}{\partial v},\frac{\partial Z}{\partial v}\Big)$$
sono le velocità delle curve coordinate ($v$ fisso, $u$ fisso) e sono tangenti alla superficie. $S$ è **regolare** se $P_u\wedge P_v\ne(0,0,0)$ per ogni $(u,v)\in\Omega$.

## Formule chiave
- Piano tangente in $S(u,v)$ (se $P_u$, $P_v$ sono linearmente indipendenti): $S(u,v)+s\,P_u+t\,P_v$.
- $P_u\wedge P_v=\hat i(Y_uZ_v-Y_vZ_u)+\hat j(Z_uX_v-Z_vX_u)+\hat k(X_uY_v-X_vY_u)$, perpendicolare alla superficie.
- Grafico $z=g(x,y)$: $S(x,y)=(x,y,g(x,y))$, $P_x\wedge P_y=(-g_x,-g_y,1)$, $\|P_x\wedge P_y\|=\sqrt{1+\|\nabla g\|^2}\ne0$: il grafico di una $C^1$ è sempre regolare.

## Intuizione
Una superficie ha due gradi di libertà (una foglia), una curva uno solo (il gambo). Lineare indipendenza di $P_u$, $P_v$ equivale a $P_u\wedge P_v\ne0$.

## Come si usa
Parametrizzazioni della lezione:
- emisfero di raggio 3: $(3\sin\varphi\cos\theta,3\sin\varphi\sin\theta,3\cos\varphi)$, $\varphi\in[0,\frac\pi2]$, $\theta\in[0,2\pi]$;
- cilindro di raggio $R$ e altezza $H$: $S(\theta,z)=(R\cos\theta,R\sin\theta,z)$, con $P_\theta=(-R\sin\theta,R\cos\theta,0)$, $P_z=(0,0,1)$, $P_\theta\wedge P_z=(R\cos\theta,R\sin\theta,0)$;
- sfera di raggio $R$: $\|P_\theta\wedge P_\varphi\|=R^2\sin\varphi$.

## Nei corsi
- **Analisi 2** (triennale): lezioni del 14/11 e 16/11/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 13 2022 green e superfici.pdf` (pp. 11-18); `triennale/ANNO 2/analisi 2/AII 14 2022 superfici e integrali.pdf` (pp. 1-10).
- **Geometria differenziale** (triennale): $P:(u,v)\in\Omega\to\mathbb R^3$, con $\Omega$ una regione (aperto connesso più una parte del bordo).
  - Condizioni: (1) $P\in C^k(\mathring\Omega)$ con $k\ge1$; (2) la jacobiana $3\times2$ ha rango 2, cioè $P_u\times P_v\neq0$. Con la sola (1) è una "superficie", con anche (2) una "superficie regolare", che è il significato di default.
  - L'immagine $S$ si chiama sostegno o traccia.
  - **Superfici equivalenti:** $P=\tilde P\circ\alpha$, con $\alpha$ cambio di parametri invertibile di classe $C^k$ e jacobiano non singolare. Il piano tangente $\mathrm{Span}\{P_u,P_v\}$ non cambia (dimostrato con la regola della catena).
  - In seguito: $P_*(\partial_u)=P_u$ e $dP=P_u\,du+P_v\,dv$.
  - Fonti: `triennale/ANNO 2/geometria differenziale/Lezione11_GD.pdf` (pp. 3-4, 9-17); `triennale/ANNO 2/geometria differenziale/Lezione15_GD.pdf` (pp. 1-5).

## Prerequisiti
- [[Funzioni di più variabili]]: il grafico di f(x,y) è una superficie
- [[Derivate parziali]]: vettori fondamentali P_u e P_v
- [[Prodotto vettoriale]]: normale P_u ∧ P_v

## Porta a
- [[Orientazione di una superficie]]: orientazione
- [[Integrale di superficie]]: integrali su superfici
- [[Spazio tangente]]: T_pS = Span{P_u, P_v}, invariante per riparametrizzazione (Geometria differenziale)
- [[Mappa di Gauss]]: N^P = P_u × P_v/||P_u × P_v|| (Geometria differenziale)
- [[Prima forma fondamentale]]: E = P_u·P_u, F = P_u·P_v, G = P_v·P_v (Geometria differenziale)

## Collegati
- [[Coordinate sferiche]]: sfera parametrizzata in coordinate sferiche
- [[Teorema della funzione inversa]]: cambio di parametri, iniettività locale (Geometria differenziale)
