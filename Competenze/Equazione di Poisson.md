---
tipo: competenza
area: fisica
corsi: [Fisica 2, Equazioni alle derivate parziali, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Poisson's equation", "equazione di Poisson per il potenziale", "laplaciano del potenziale", "∇²V = -ρ/ε0", "equazione di Laplace dell'elettrostatica", "-Δu = f"]
tags: [competenza, area/fisica]
---

# Equazione di Poisson

> Equazione differenziale che lega il laplaciano del potenziale elettrostatico alla densità di carica: riassume in un'unica equazione scalare la legge di Gauss e la conservatività del campo.

## Definizione / enunciato
Si parte da due fatti: la **legge di Gauss in forma differenziale**, $\mathrm{div}\vec E=\rho/\varepsilon_o$ (ottenuta dalla forma integrale con il teorema della divergenza), e la **conservatività**, $\vec\nabla\times\vec E=0$, che permette di scrivere $\vec E=-\vec\nabla V$. Sostituendo il gradiente nella divergenza si ottiene un'equazione per la sola funzione scalare $V(x,y,z)$, detta equazione di Poisson. Nelle regioni senza carica ($\rho=0$) diventa $\nabla^2V=0$ (equazione di Laplace) e il potenziale è una funzione armonica.

## Formule chiave
$$\frac{\partial E_x}{\partial x}+\frac{\partial E_y}{\partial y}+\frac{\partial E_z}{\partial z}=\mathrm{div}\vec E=\frac{\rho}{\varepsilon_o}=\vec\nabla\cdot\vec E$$
$$\frac{\rho}{\varepsilon_o}=\vec\nabla\cdot(-\vec\nabla V)\;\Rightarrow\;\nabla^2V=\Delta V(x,y,z)=\frac{\partial^2V}{\partial x^2}+\frac{\partial^2V}{\partial y^2}+\frac{\partial^2V}{\partial z^2}=-\frac{\rho}{\varepsilon_o}$$
$$V(x,y,z)=\frac1{4\pi\varepsilon_o}\int\frac{\rho}{|\vec r-\vec r'|}\,d\tau$$

## Intuizione
La carica è la "sorgente" del potenziale: dove c'è $\rho$ il potenziale si incurva. La soluzione è già nota: è il potenziale della distribuzione di carica ottenuto per sovrapposizione delle cariche puntiformi $dq=\rho\,d\tau$.

## Come si usa
Nota $\rho$, la soluzione si scrive direttamente con l'integrale di sovrapposizione. Lo stesso schema matematico si riusa in magnetostatica: l'equazione $\nabla^2\vec A=-\mu_0\vec j$ per il potenziale vettore ha la stessa forma, quindi la stessa soluzione (componente per componente).

## Nei corsi
- **Fisica 2** (triennale): chiusura della lezione 6, dopo la legge di Gauss in forma differenziale. Notazione $\varepsilon_o$, $\Delta V$ come sinonimo di $\nabla^2V$. Fonti: `triennale/ANNO 2/fisica 2/lezioni/6. LEZIONE.pdf` (pp. 38, 41-43).
- **Equazioni di fisica matematica** (triennale): esempio di PDE del secondo ordine, $\Delta u=-\frac1\varepsilon\rho(x)$ in $\Omega\subseteq\mathbb R^n$, con $\varepsilon$ costante e $\rho$ funzione assegnata, scritto nella forma generale $F(\{D^\alpha u\},u,x)=0$ come $\Delta u+\frac1\varepsilon\rho=0$. Fonte: `triennale/ANNO 3/eq fisica matematica/11 - Lezione 31_10_23.pdf` (pp. 4, 6).
- **Equazioni alle derivate parziali** (triennale): $-\Delta u=f$ in $\Omega\subset\mathbb R^n$ (segno con $-\Delta$, così l'operatore è positivo), prototipo delle EDP lineari ellittiche del secondo ordine. In una dimensione $-u''=f$ è l'esempio con cui si introducono soluzioni deboli e distribuzionali (Es. 2.2.2). Si studiano il problema di Dirichlet e quello di Neumann, una soluzione in $\mathbb R^n$ come convoluzione con la soluzione fondamentale e la rappresentazione con la funzione di Green. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 10-11, 14-15, 24-27).

## Prerequisiti
- [[Potenziale elettrostatico]]: si sostituisce E = -∇V
- [[Teorema di Gauss del flusso]]: si parte dalla forma differenziale div E = ρ/ε0

## Porta a
- [[Potenziale vettore]]: ∇²A = -μ0 j ha la stessa forma, quindi la stessa soluzione
- [[Problema di Dirichlet per l'equazione di Poisson]]: l'equazione con dato al bordo (Equazioni alle derivate parziali)

## Collegati
- [[Funzione armonica]]: senza cariche ∇²V = 0: il potenziale è armonico
- [[Equazione alle derivate parziali]]: esempio di PDE lineare del secondo ordine (Equazioni di fisica matematica)
- [[Soluzione fondamentale del laplaciano]]: l'integrale di sovrapposizione è la convoluzione con $G$
